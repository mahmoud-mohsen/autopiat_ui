import { Reservation } from './../../models/Reservations.model';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getReservation();
  }

  getReservation() {

    let url = `reservations`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.reservations = response;
    });
  }

  deleteReservation(reservationId) {
    let url = `reservations/${reservationId}`;
    this.backendService.deleteEntity(url).subscribe((response: any) => {
      this.reservations = response;
      window.location.reload();
    });
  }
}
