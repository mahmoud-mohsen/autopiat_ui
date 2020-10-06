import { ReservationConfirmation } from './../../models/ReservationConfirmation.model';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-confirmation-view',
  templateUrl: './reservation-confirmation-view.component.html',
  styleUrls: ['./reservation-confirmation-view.component.css']
})
export class ReservationConfirmationViewComponent implements OnInit {

  reservationConfirmationList: ReservationConfirmation[];
  tableReservationConfirmationList: ReservationConfirmation[];


  page = 1;
  pageSize = 4;
  listSize;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getReservationConfirmationList();
  }

  getReservationConfirmationList() {
    let url = `reservations/done`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.reservationConfirmationList = response;
      this.tableReservationConfirmationList = this.reservationConfirmationList;

      this.listSize = this.reservationConfirmationList.length;
    });
  }

  refreshCountries() {
    this.tableReservationConfirmationList = this.reservationConfirmationList.map((item, i) => ({ id: i + 1, ...item })).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    console.log(this.tableReservationConfirmationList);

  }

}
