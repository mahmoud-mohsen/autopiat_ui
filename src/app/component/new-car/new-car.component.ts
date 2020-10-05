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
  image

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
    console.log(this.image);
    
    // let url = `car`;
    // this.backendService.pushFileToStorage(url, this.files).subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress) {
    //     this.progress.percentage = Math.round(100 * event.loaded / event.total);
    //   } else if (event instanceof HttpResponse) {
    //     console.log('File is completely uploaded!');
    //   }
    // })
    // this.backendService.post(formdata, url).subscribe(() => {
    //   this.router.navigate([`home`]);
    // });
  }

  getLookUps() {
    let url = `lookup`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.lookups = response;

    });
  }


  selectFile(event) {
    console.log(event.target.files.length);

    if (event.target.files.length) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.files.push(<File>event.target.files[i]);
      }
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)

    this.selectedFiles = undefined
  }

  prepareImage(image) {
    // var file: File = image.target.files[0];
    console.log(image.target.files);
    
    for (let i = 0; i < image.target.files.length; i++) {
      if (image.target.files[i]) {
        this.preview(image.target.files[i])
      }
      var myReader: FileReader = new FileReader();

      myReader.onloadend = (e) => {
        console.log(this.image);
        
        this.image = myReader.result+",";
      }
      myReader.readAsDataURL(image.target.files[i]);
    }


  }

  preview(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
