import { WaitingExistence } from './../../models/WaitingExistence.model';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-existence-view',
  templateUrl: './waiting-existence-view.component.html',
  styleUrls: ['./waiting-existence-view.component.css']
})
export class WaitingExistenceViewComponent implements OnInit {
  waitingExistenceList: WaitingExistence[];
  tableWaitingExistenceList: WaitingExistence[];


  page = 1;
  pageSize = 4;
  listSize;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getWaitingExistenceList();
  }

  getWaitingExistenceList() {
    let url = `reservations/waiting/existence`;
    this.backendService.ViewEntities(url).subscribe((response: any) => {
      this.waitingExistenceList = response;
      this.tableWaitingExistenceList = this.waitingExistenceList;

      this.listSize = this.waitingExistenceList.length;
    });
  }

  refreshCountries() {        
    this.tableWaitingExistenceList = this.waitingExistenceList.map((item, i) => ({id: i + 1, ...item})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    console.log(this.tableWaitingExistenceList);

  }

  setIsExistFlag(reservationId,isExist){
    let url = `reservations/${reservationId}/existence`;
    let param={'exist':isExist};
    this.backendService.post(null,url,param).subscribe(() => {
      location.reload();
    });
  }
}
