import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FilterCar } from 'src/app/models/FilterCar.model';
import { FilterCarPaged } from 'src/app/models/FilterCarPaged.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  filterdCars: FilterCar[];
  constructor(private backendService: BackendService, private sanitizer: DomSanitizer, private router: Router) {
    this.filterdCars = [];
  }

  ngOnInit(): void {
    this.getFavoriteCars();
  }

  getFavoriteCars() {
    let url = `favorites`;

    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.filterdCars = response;
    }, (error: any) => {
      alert(error.error.message);
    });
  }
  openCarPage(carId) {
    this.router.navigate(['/car', carId]);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  deletefavorite(carId){
    let url = `favorites/car/${carId}`;

    this.backendService.deleteEntity(url).subscribe((response: any) => {
      this.filterdCars = response;
      window.location.href=window.location.href;
    }, (error: any) => {
      alert(error.error.message);
    });
  }
}
