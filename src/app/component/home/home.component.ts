import { AuthService } from './../../services/auth-service.service';
import { CarTypeList } from './../../models/CarTypeList.model';
import { BackendService } from './../../services/backend.service';
import { FilterCar } from './../../models/FilterCar.model';
import { Lookups } from './../../models/Lookups.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suggestedCars: FilterCar[];
  carTypeList: CarTypeList[];

  fastSearchModel;
  fastSearchType;
  fastSearchYearFrom;
  fastSearchYearTo;
  fastSearchPriceFrom;
  fastSearchPriceTo;
  fastSearchCategory

  lookups: Lookups;
  years: number[] = [];
  prices: number[] = [];

  @Input()
  generalSearchText: String;
  @Input()
  generalSearchCategory: String;

  categoryId: string;

  constructor(private router: Router, private backendService: BackendService, private authService: AuthService) {
    this.categoryId = "0";
    this.fastSearchModel = null;
    this.fastSearchType = null;
    this.fastSearchYearFrom = null;
    this.fastSearchYearTo = null;
    this.fastSearchPriceFrom = null;
    this.fastSearchPriceTo = null;
    this.fastSearchCategory = null;
  }

  ngOnInit(): void {
    this.getLookUps();
    this.prepareYearsDropDownList();
    this.getSuggestedCars();

  }

  getLookUps() {
    let url = `lookup`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.lookups = response;

    });
  }

  getSuggestedCars() {
    let url = `suggestedCar`;

    let param = { "count": 2 }

    this.backendService.ViewEntities(url, param).subscribe((response: any) => {
      this.suggestedCars = response;
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
}
