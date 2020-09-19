import { CarFilterValues } from './../../models/CarFilterValues.model';
import { FilterCarPaged } from './../../models/FilterCarPaged.model';
import { FilterCar } from './../../models/FilterCar.model';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  suggestedCars: FilterCar[];
  filterdCars: FilterCarPaged;
  filterValues: CarFilterValues;
  type;
  model;
  motionVector;
  status;
  numberOfDoors;
  priceFrom;
  priceTo;
  yearFrom;
  yearTo;
  luxuries;
  design;
  color;
  isGuarantee;
  isUnique;
  isPartener;
  searchText;
  category;

  years: number[] = [];

  sort;
  sortVariable;

  constructor(private router: Router, private backendService: BackendService, private route: ActivatedRoute) {

    this.filterdCars = new FilterCarPaged();
    this.filterValues = new CarFilterValues();

    this.sort = null;
    this.sortVariable = null;
  }


  ngOnInit(): void {


    this.searchText = this.route.snapshot.queryParamMap.get('searchText');
    this.category = this.route.snapshot.queryParamMap.get('category');
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.model = this.route.snapshot.queryParamMap.get('model');
    this.yearFrom = this.route.snapshot.queryParamMap.get('yearFrom');
    this.yearTo = this.route.snapshot.queryParamMap.get('yearTo');
    this.priceFrom = this.route.snapshot.queryParamMap.get('priceFrom');
    this.priceTo = this.route.snapshot.queryParamMap.get('priceTo');
    this.design = this.route.snapshot.queryParamMap.get('design');
    this.motionVector = this.route.snapshot.queryParamMap.get('motionVector');
    this.status = this.route.snapshot.queryParamMap.get('status');
    this.numberOfDoors = this.route.snapshot.queryParamMap.get('numberOfDoors');
    this.luxuries = this.route.snapshot.queryParamMap.get('luxuries');
    this.color = this.route.snapshot.queryParamMap.get('color');
    this.isGuarantee = this.route.snapshot.queryParamMap.get('isGuarantee');
    this.isUnique = this.route.snapshot.queryParamMap.get('isUnique');
    this.isPartener = this.route.snapshot.queryParamMap.get('isPartener');

    this.filterCars();
    this.getSuggestedCars();
    this.getFilterValues();
    this.prepareYearsDropDownList();
  }

  getFilterValues() {
    let url = `filterValues`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.filterValues = response;
    }, (error: any) => {
      alert(error.error.message);
    });
  }
  getSuggestedCars() {
    let url = `suggestedCar`;
    let param = { "count": 5 }

    this.backendService.ViewEntities(url, param).subscribe((response: any) => {
      this.suggestedCars = response;
    }, (error: any) => {
      alert(error.error.message);
    });
  }

  filterCars() {
    let url = `car/search`;
    let param = {};
    if (this.design) {
      param["design"] = this.design;
    }
    if (this.searchText) {
      param["searchText"] = this.searchText;
    }
    if (this.category) {
      param["category"] = this.category;
    }
    if (this.type) {
      param["type"] = this.type;
    }
    if (this.model) {
      param["model"] = this.model;
    }
    if (this.motionVector) {
      param["motionVector"] = this.motionVector;
    }
    if (this.status) {
      param["status"] = this.status;
    }
    if (this.numberOfDoors) {
      param["numberOfDoors"] = this.numberOfDoors;
    }
    if (this.priceFrom) {
      param["priceFrom"] = this.priceFrom;
    }
    if (this.priceTo) {
      param["priceTo"] = this.priceTo;
    }
    if (this.yearFrom) {
      param["yearFrom"] = this.yearFrom;
    }
    if (this.yearTo) {
      param["yearTo"] = this.yearTo;
    }
    if (this.color) {
      param["color"] = this.color;
    }
    if (this.isGuarantee) {
      param["isGuarantee"] = this.isGuarantee;
    }
    if (this.isUnique) {
      param["isUnique"] = this.isUnique;
    }
    if (this.isPartener) {
      param["isPartener"] = this.isPartener;
    }
    if (this.sort && this.sortVariable) {
      param["sort"] = `${this.sortVariable},${this.sort}`;
    }


    this.backendService.ViewEntities(url, param).subscribe((response: any) => {
      this.filterdCars = response;
    });
  }

  updateFilter() {
    let param = {};
    if (this.design && this.design != 'null') {
      param["design"] = this.design
    }
    if (this.model && this.model != 'null') {
      param["model"] = this.model
    }
    if (this.motionVector && this.motionVector != 'null') {
      param["motionVector"] = this.motionVector
    }
    if (this.status && this.status != 'null') {
      param["status"] = this.status
    }
    if (this.numberOfDoors && this.numberOfDoors != 'null') {
      param["numberOfDoors"] = this.numberOfDoors
    }
    if (this.priceFrom && this.priceFrom != 'null') {
      param["priceFrom"] = this.priceFrom
    }
    if (this.priceTo && this.priceTo != 'null') {
      param["priceTo"] = this.priceTo
    }
    if (this.yearFrom && this.yearFrom != 'null') {
      param["yearFrom"] = this.yearFrom
    }
    if (this.yearTo && this.yearTo != 'null') {
      param["yearTo"] = this.yearTo
    }
    if (this.luxuries && this.luxuries != 'null') {
      param["luxuries"] = this.luxuries
    }
    if (this.type && this.type != 'null') {
      param["type"] = this.type
    }
    if (this.yearFrom && this.color != 'null') {
      param["color"] = this.color
    }
    if (this.isGuarantee && this.isGuarantee != 'null') {
      param["isGuarantee"] = this.isGuarantee
    }
    if (this.isUnique && this.isUnique != 'null') {
      param["isUnique"] = this.isUnique
    }
    if (this.isPartener && this.isPartener != 'null') {
      param["isPartener"] = this.isPartener
    }
    if (this.category && this.category != 'null') {
      param["category"] = this.category
    }

    this.router.navigate(['filter'], { queryParams: param });
    this.filterCars();
  }
  sortCars() {
    console.log(this.filterdCars.content);

    this.filterdCars.content = this.filterdCars.content.sort(function (a, b) {
      return Number(a.price) > Number(b.price) ? 1 : Number(a.price) < Number(b.price) ? -1 : 0
    })

    this.filterdCars.content = this.filterdCars.content.sort(function (b, a) {
      return Number(a.price) > Number(b.price) ? 1 : Number(a.price) < Number(b.price) ? -1 : 0
    })


  }
  prepareYearsDropDownList() {
    for (let index = 1800; index <= 2020; index++) {
      this.years.push(index);
    }
  }

}
