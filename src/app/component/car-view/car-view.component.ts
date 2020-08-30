import { Car } from './../../models/Car.model';
import { BackendService } from './../../services/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {
  carId;
  car: Car;
  carImages:string[];


  constructor(private activeRouter: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(params => {
      this.carId = +params.get('id');
      this.getCar();
    });
  }

  getCar() {
    let url = `car/${this.carId}`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.car = response; 
      this.carImages=this.car.images.split(',');     
    }, (error: any) => {
      alert(error.error.message);
    });
  }
}
