import { Lookups } from './../../models/Lookups.model';
import { Router } from '@angular/router';
import { BackendService } from './../../services/backend.service';
import { NewCar } from './../../models/NewCar.model';
import { Component, OnInit } from '@angular/core';
import { CarTypeList } from 'src/app/models/CarTypeList.model';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  newCar: NewCar;
  lookups: Lookups;
  carTypeList: CarTypeList[];

  imgURL;
  image;

  selectedFiles: FileList
  currentFileUpload: File
  files: File[] = [];
  progress: { percentage: number } = { percentage: 0 }

  category: string;

  constructor(private backendService: BackendService, private router: Router) {
    this.newCar = new NewCar();
  }

  ngOnInit(): void {
    this.getLookUps();

  }
  saveCar() {
    let url = `car`;
    this.newCar.images = this.image;
    this.backendService.post(this.newCar, url).subscribe((response: any) => {

      if(this.files.length!=0){
        this.saveCarImages(response.id);
      }
      this.router.navigate([`home`]);
    });
  }

  saveCarImages(carId) {
    let url = `car/${carId}/images`;
    this.backendService.postWithFile(url, this.files).subscribe(() => {
      console.log("done");

    });
  }

  getCarType() {
    let url = `category/carType`;
    let param={"category":this.category};
    this.backendService.ViewEntities(url,param).subscribe((response: any) => {
      this.carTypeList = response;
    });
  }


  getLookUps() {
    let url = `lookup`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.lookups = response;

    });
  }

  prepareMultiImage(image) {
    this.files = image.files;
  }
}
