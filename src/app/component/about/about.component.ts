import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  whatAutopiatMenue: Boolean;
  whatAutopiatMenueItemNumber: string;

  howToBuyMenue: Boolean;
  howToBuyMenueItemNumber: string;

  sellServiceMenue: Boolean;
  sellServiceMenueItemNumber: string;

  customerServiceMenue: Boolean;
  customerServiceMenueItemNumber: string;

  beforeBuyMenue: Boolean;
  beforeBuyMenueItemNumber: string;

  examinationMenue: Boolean;
  examinationItemNumber: string;

  constructor(private router: Router) {
    let menueNumber;
    if (this.router.getCurrentNavigation().extras.state) {
      menueNumber = this.router.getCurrentNavigation().extras.state.menueNumber;
    }
    if (menueNumber) {
      if (menueNumber == 2) {
        this.howToBuyMenue = true;
        this.howToBuyMenueItemNumber = '1';
      }
      else if (menueNumber == 3) {
        this.sellServiceMenue = true;
        this.sellServiceMenueItemNumber = '1';
      }
      else if (menueNumber == 4) {
        this.customerServiceMenue = true;
        this.customerServiceMenueItemNumber = '1';
      }
      else if (menueNumber == 5) {
        this.beforeBuyMenue = true;
        this.beforeBuyMenueItemNumber = '1';
      }
      else if (menueNumber == 6) {
        this.examinationMenue = true;
        this.examinationItemNumber = '1';
      }
      else {
        this.whatAutopiatMenue = true;
        this.whatAutopiatMenueItemNumber = '1';
      }
    }
    else {
      this.whatAutopiatMenue = true;
      this.whatAutopiatMenueItemNumber = '1';
    }

  }

  ngOnInit(): void {

  }

  OpenWhatAutopiatMenue() {
    this.whatAutopiatMenue = true;
    this.whatAutopiatMenueItemNumber = '1';
    this.howToBuyMenue = false;
    this.sellServiceMenue = false;
    this.customerServiceMenue = false;
    this.beforeBuyMenue = false;
    this.examinationMenue = false;
  }
  changeWhatAutopiatItemNumber(itemNumber) {
    this.whatAutopiatMenueItemNumber = itemNumber;
  }

  OpenHowToBuyMenue() {
    this.whatAutopiatMenue = false;
    this.howToBuyMenue = true;
    this.howToBuyMenueItemNumber = '1';
    this.sellServiceMenue = false;
    this.customerServiceMenue = false;
    this.beforeBuyMenue = false;
    this.examinationMenue = false;
  }
  changeHowToBuyItemNumber(itemNumber) {
    this.howToBuyMenueItemNumber = itemNumber;
  }

  OpenSellServiceMenue() {
    this.whatAutopiatMenue = false;
    this.howToBuyMenue = false;
    this.sellServiceMenue = true;
    this.sellServiceMenueItemNumber = '1';
    this.customerServiceMenue = false;
    this.beforeBuyMenue = false;
    this.examinationMenue = false;

  }
  changeSellServiceItemNumber(itemNumber) {
    this.sellServiceMenueItemNumber = itemNumber;
  }

  changeCustomerServiceItemNumber(itemNumber) {
    this.customerServiceMenueItemNumber = itemNumber;
  }
  changeBeforBuyItemNumber(itemNumber) {
    this.beforeBuyMenueItemNumber = itemNumber;
  }
  changeExaminationItemNumber(itemNumber) {
    this.examinationItemNumber = itemNumber;
  }

}
