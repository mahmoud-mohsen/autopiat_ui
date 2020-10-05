import { Router } from '@angular/router';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.css']
})
export class NewNewsComponent implements OnInit {
  image;
  imgURL: any;

  title;
  description;
  category;
  constructor(private backendService:BackendService,private router:Router ) { }

  ngOnInit(): void {
  }

  addNews() {
    let body = { "title": this.title, "description": this.description, "image": this.image,"category":this.category };
    let url = `news`;

    this.backendService.post(body, url).subscribe(() => {
      this.router.navigate([`home`]);
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
