import { ReservationStatus } from './../../models/ReservationsStatus.model';
import { BackendService } from './../../services/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reservation-process',
  templateUrl: './reservation-process.component.html',
  styleUrls: ['./reservation-process.component.css']
})
export class ReservationProcessComponent implements OnInit {
  reservationId;
  reservationStatus: ReservationStatus;
  step: any;

  agreementDate: Date;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // return day !== 5 && day !== 6;
    return true
  }

  constructor(private activeRouter: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(params => {
      this.reservationId = +params.get('id');
      this.getReservationDetails();
    });


  }

  getReservationDetails() {
    let url = `reservations/${this.reservationId}/status`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.reservationStatus = response;
      console.log(this.reservationStatus);
      
      if(this.reservationStatus.isReservationConfirmed){
        this.step = 4;
      }
      else if(this.reservationStatus.isAgreed){
        this.step = 3;

      }else if(this.reservationStatus.isExist!=null){
        this.step = 2;

      }else{
        this.step = 1;

      }
    });
  }

  changeStep(stepNum) {
    this.step = stepNum;
  }

  submitAgreementdate(reservationId) {
    if (this.agreementDate) {
      let url = `reservations/${reservationId}/agreementDate`;
      let param = { "aggreementDate": this.agreementDate.getTime() };

      this.backendService.post(param, url).subscribe(() => {
        window.location.reload();
      });
    } else {
      alert("يجب تحديد الوقت");
    }




  }
}
