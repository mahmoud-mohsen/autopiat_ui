import { Router } from '@angular/router';
import { FilterCar } from './../../models/FilterCar.model';
import { Lookups } from './../../models/Lookups.model';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  generalSearchText: String;
  generalSearchCategory: String;

  suggestedCars: FilterCar[];
  lookups: Lookups;

  constructor(private router: Router,private backendService: BackendService) { }

  ngOnInit(): void {
    this.getSuggestedCars();
    this.getLookUps();
  }

  generalCategorySearch() {
    if (this.generalSearchCategory&&this.generalSearchText) {
      let param = {};
      param["searchText"] = this.generalSearchText
      if(this.generalSearchCategory!='all'){
        param["category"] = this.generalSearchCategory
      }
    
    this.router.navigate(['filter'], { queryParams: param});
    }
  }

  getLookUps() {
    let url = `lookup`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.lookups = response;

    }, (error: any) => {
      alert(error.error.message);
    });
  }

  getSuggestedCars() {
    let url = `suggestedCar`;
    let param = { "count": 2 }

    this.backendService.ViewEntities(url, param).subscribe((response: any) => {
      this.suggestedCars = response;
    }, (error: any) => {
      alert(error.error.message);
    });

  }
}
