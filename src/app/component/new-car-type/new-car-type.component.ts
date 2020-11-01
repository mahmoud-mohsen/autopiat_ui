import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lookups } from 'src/app/models/Lookups.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-new-car-type',
  templateUrl: './new-car-type.component.html',
  styleUrls: ['./new-car-type.component.css']
})
export class NewCarTypeComponent implements OnInit {

  image;
  imgURL: any;

  name;
  description;
  category;

  lookups: Lookups;

  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.getLookUps();
  }

  addNewCarType() {
    let body = { "name": this.name, "description": this.description, "image": this.image, "category": this.category };
    let url = `category/type`;

    this.backendService.post(body, url).subscribe(() => {
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
