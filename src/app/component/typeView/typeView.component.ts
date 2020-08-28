import { BackendService } from './../../services/backend.service';
import { CarTypeList } from './../../models/CarTypeList.model';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'typeView-newcar',
  templateUrl: './typeView.component.html',
  styleUrls: ['./typeView.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TypeViewComponent implements OnInit {
  CATEGORIES = ["سيارات جديدة", "سيارات مستعملة", "سيارات متحدى الاعاقة", "شاحنات", "اوتوبيسات", "معدات ثقيلة", "قطع غيار واكسسوارات", "اطارات"];


  carTypeList: CarTypeList[];

  @Input()
  categoryId: String;

  categoryName: string;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getCarTyps();

    this.categoryName = this.CATEGORIES[Number(this.categoryId) - 1];

  }

  getCarTyps() {
    let url = `category/${this.categoryId}/carType`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.carTypeList = response;
    }, (error: any) => {
      alert(error.error.message);
    });
  }
}


