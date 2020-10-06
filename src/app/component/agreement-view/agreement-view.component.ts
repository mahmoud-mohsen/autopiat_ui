import { Agreement } from './../../models/Agreement.model';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agreement-view',
  templateUrl: './agreement-view.component.html',
  styleUrls: ['./agreement-view.component.css']
})
export class AgreementViewComponent implements OnInit {

  agreementList: Agreement[];
  tableAgreementList: Agreement[];


  page = 1;
  pageSize = 4;
  listSize;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getAgreementList();
  }

  getAgreementList() {
    let url = `reservations/agreement`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.agreementList = response;
      this.tableAgreementList = this.agreementList;

      this.listSize = this.agreementList.length;
    });
  }

  refreshCountries() {
    console.log(this.tableAgreementList);
        
    this.tableAgreementList = this.agreementList.map((item, i) => ({id: i + 1, ...item})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    console.log(this.tableAgreementList);

  }

  setReservationCompleteFlag(reservationId){
    let url = `reservations/${reservationId}/done`;
    let param={'done':true};
    this.backendService.post(null,url,param).subscribe(() => {
      location.reload();
    });
  }
}
