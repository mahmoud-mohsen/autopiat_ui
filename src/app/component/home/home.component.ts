import { News } from './../../models/News.model';
import { AuthService } from './../../services/auth-service.service';
import { CarTypeList } from './../../models/CarTypeList.model';
import { AdminConfiguration } from './../../models/AdminConfiguration.model';
import { BackendService } from './../../services/backend.service';
import { FilterCar } from './../../models/FilterCar.model';
import { Lookups } from './../../models/Lookups.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suggestedCars: FilterCar[];
  carTypeList: CarTypeList[];
  homeSuggestedCars: FilterCar[];

  fastSearchModel;
  fastSearchType;
  fastSearchYearFrom;
  fastSearchYearTo;
  fastSearchPriceFrom;
  fastSearchPriceTo;
  fastSearchCategory

  latestCars: FilterCar[];
  latestItems: FilterCar[];

  lookups: Lookups;
  years: number[] = [];
  prices: number[] = [];

  newsList: News[];

  newsCategories: string[];

  homeImage;
  advImage;
  offer1Image;
  offer2Image;
  offer3Image;

  @Input()
  generalSearchText: String;
  @Input()
  generalSearchCategory: String;

  categoryId: string;

  carCategoryList: string[];
  itemCategoryList: string[];

  configuration: AdminConfiguration;

  constructor(private router: Router, private backendService: BackendService, private authService: AuthService, private sanitizer: DomSanitizer) {
    this.categoryId = "0";
    this.fastSearchModel = null;
    this.fastSearchType = null;
    this.fastSearchYearFrom = null;
    this.fastSearchYearTo = null;
    this.fastSearchPriceFrom = null;
    this.fastSearchPriceTo = null;
    this.fastSearchCategory = null;

    this.configuration=new AdminConfiguration();
  }

  ngOnInit(): void {
    this.getLookUps();
    this.prepareYearsDropDownList();
    this.getSuggestedCars();
    this.getLatestCars('all');
    this.getHomeSuggestedCars('')
    this.newsCategories = ['اهم الاخبار', 'اهم السياسه العالمية', 'اهم اخبار الشركات', 'اهم العروض', 'اهم المعارض المقامة'];
    this.getNews('');
    this.getConfiguration();

  }

  getLookUps() {
    let url = `lookup`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.lookups = response;
      this.carCategoryList = this.lookups.categories.filter(item => item !== 'اطارات وبطاريات' && item !== 'قطع غيار و اكسسوارات');
      this.itemCategoryList = this.lookups.categories.filter(item => item == 'اطارات وبطاريات' || item == 'قطع غيار و اكسسوارات');
    });
  }

  getSuggestedCars() {
    let url = `suggestedCar`;

    let param = { "count": 2 }

    this.backendService.ViewEntities(url, param).subscribe((response: any) => {
      this.suggestedCars = response;
    });

  }

  getNews(category) {
    let url = `news`;

    let param = { "sort": 'creationDate,desc', 'size': 5, 'category': category };

    this.backendService.ViewEntities(url, param).subscribe((response: any) => {
      this.newsList = response.content;
    });

  }

  prepareYearsDropDownList() {
    for (let index = 1800; index <= 2020; index++) {
      this.years.push(index);
    }
  }

  getCarTyps(categoryId) {
    this.categoryId = categoryId;

    let url = `category/${this.categoryId}/carType`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.carTypeList = response;
    });
  }

  fastSearch() {

    let param = {};

    if (this.fastSearchCategory && this.fastSearchCategory != 'null') {
      param["category"] = this.fastSearchCategory
    }
    if (this.fastSearchType && this.fastSearchType != 'null') {
      param["type"] = this.fastSearchType
    }
    if (this.fastSearchModel && this.fastSearchModel != 'null') {
      param["model"] = this.fastSearchModel
    }
    if (this.fastSearchYearFrom && this.fastSearchYearFrom != 'null') {
      param["yearFrom"] = this.fastSearchYearFrom
    }
    if (this.fastSearchYearTo && this.fastSearchYearTo != 'null') {
      param["yearTo"] = this.fastSearchYearTo
    }
    if (this.fastSearchPriceFrom && this.fastSearchPriceFrom != 'null') {
      param["priceFrom"] = this.fastSearchPriceFrom
    }
    if (this.fastSearchPriceTo && this.fastSearchPriceTo != 'null') {
      param["priceTo"] = this.fastSearchPriceTo
    }


    this.router.navigate(['filter'], { queryParams: param });

  }

  isAuthenticated() {
    return this.authService.isTokenExistAndNotExipired();
  }

  openAboutPage(menueNumber) {
    this.router.navigateByUrl('/about', { state: { menueNumber: menueNumber } });

  }
  getLatestCars(category) {
    let params = { "category": category };
    let url = `category/car/latest`;
    this.backendService.ViewEntities(url, params).subscribe((response: any) => {
      this.latestCars = response;
    });
  }

  getLatestItems(category) {
    let params = { "category": category };
    let url = `category/car/latest`;
    this.backendService.ViewEntities(url, params).subscribe((response: any) => {
      this.latestItems = response;
    });
  }
  getHomeSuggestedCars(category) {
    let params = { "category": category, 'count': 7 };
    let url = `suggestedCar`;
    this.backendService.ViewEntities(url, params).subscribe((response: any) => {
      this.homeSuggestedCars = response;

    });
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  getFirstImage(car: FilterCar) {
    if (car.images) {
      return car.images.split(',')[0];
    }
  }

  prepareHomeImage(image) {
    var file: File = image.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.homeImage = myReader.result;
      if (this.homeImage) {        
        let body = { "homeImage": this.homeImage }
        this.changeImage(body);
      }
    }
    myReader.readAsDataURL(file);

  }

  prepareAdvImage(image) {
    var file: File = image.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.advImage = myReader.result;
      if (this.advImage) {
        let body = { "advImage": this.advImage }
        this.changeImage(body);
      }
    }
    myReader.readAsDataURL(file);

  }

  prepareOffer1Image(image) {
    var file: File = image.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.offer1Image = myReader.result;
      if (this.offer1Image) {        
        let body = { "offer1Image": this.offer1Image }
        this.changeImage(body);
      }
    }
    myReader.readAsDataURL(file);

  }
  prepareOffer2Image(image) {
    var file: File = image.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.offer2Image = myReader.result;
      if (this.offer2Image) {
        let body = { "offer2Image": this.offer2Image }
        this.changeImage(body);
      }
    }
    myReader.readAsDataURL(file);

  }
  prepareOffer3Image(image) {
    var file: File = image.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.offer3Image = myReader.result;
      if (this.offer3Image) {
        let body = { "offer3Image": this.offer3Image }
        this.changeImage(body);
      }
    }
    myReader.readAsDataURL(file);

  }

  changeImage(body) {
    let url = `configurations`;
    this.backendService.post(body, url).subscribe(() => {
      window.location.href = window.location.href;
    });
  }

  getConfiguration() {
    let url = `configurations`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.configuration = response;
    });
  }

}
