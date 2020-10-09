import { Lookups } from './../../models/Lookups.model';
import { Router } from '@angular/router';
import { BackendService } from './../../services/backend.service';
import { NewCar } from './../../models/NewCar.model';
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  newCar: NewCar;
  lookups: Lookups;

  imgURL;
  image;

  selectedFiles: FileList
  currentFileUpload: File
  files: File[] = [];
  progress: { percentage: number } = { percentage: 0 }


  constructor(private backendService: BackendService, private router: Router) {
    this.newCar = new NewCar();
  }

  ngOnInit(): void {
    this.getLookUps();

  }
  saveCar() {
    let url = `car`;
    this.newCar.images=this.image;
    console.log(this.newCar.guarantee);
    console.log(this.newCar.partener);
    console.log(this.newCar.unique);    
    this.backendService.post(this.newCar, url).subscribe(() => {
      this.router.navigate([`home`]);
    });
  }

  getLookUps() {
    let url = `lookup`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.lookups = response;

    });
  }
  prepareImage(image) {
    var file: File = image.files[0];
    if (file) {
      this.preview(file)
    }
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);

  }
  preview(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}
