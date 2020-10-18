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
  carImages: string[];

  mainCarImage;


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
      this.carImages = this.car.images.split(',');
      this.mainCarImage=this.carImages[0];
      this.addCarInLastSeen();

    });
  }

  reserveCar(carId) {
    let url = `reservations`;
    let param = { "carId": carId };

    this.backendService.post(param, url).subscribe((response: any) => {
      alert("تم الحجز")
    });
  }

  addCarInLastSeen() {
    let car = { "carId": this.car.id, "image": this.carImages[0] };
    let localStorageLastSeenCarsAsString = localStorage.getItem("lastSeenCars");
    if (localStorageLastSeenCarsAsString) {
      let localStorageLastSeenCars = Array<{ carId: string, image: string }>();

      localStorageLastSeenCars = JSON.parse(localStorageLastSeenCarsAsString);

      //check car in localstorage
      let found: Boolean = false;
      for (let i = 0; i < localStorageLastSeenCars.length; i++) {
        if (localStorageLastSeenCars[i].carId == this.car.id) {
          found = true;
          break;
        }
      }

      //Add car if not in local storage
      if (!found) {
        if (localStorageLastSeenCars.length >= 2) {
          localStorageLastSeenCars.splice(-1, 1);
        }
        localStorage.setItem("lastSeenCars", JSON.stringify([car].concat(localStorageLastSeenCars)));
      }
    } else {
      let lastSeenCars = [];
      lastSeenCars.push(car);
      localStorage.setItem("lastSeenCars", JSON.stringify(lastSeenCars));
    }
  }

  changeMainCarImage(image){
    this.mainCarImage=image;
  }
}
