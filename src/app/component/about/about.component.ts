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

  constructor(private router: Router) {
    let menueNumber = this.router.getCurrentNavigation().extras.state.menueNumber;
    if (menueNumber) {
      if (menueNumber == 2) {
        this.howToBuyMenue = true;
        this.howToBuyMenueItemNumber = '1';
      }
      else if (menueNumber == 3) {
        this.sellServiceMenue = true;
        this.sellServiceMenueItemNumber = '1';
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
  }
  changeWhatAutopiatItemNumber(itemNumber) {
    this.whatAutopiatMenueItemNumber = itemNumber;
  }

  OpenHowToBuyMenue() {
    this.whatAutopiatMenue = false;
    this.howToBuyMenue = true;
    this.howToBuyMenueItemNumber = '1';
    this.sellServiceMenue = false;
  }
  changeHowToBuyItemNumber(itemNumber) {
    this.howToBuyMenueItemNumber = itemNumber;
  }

  OpenSellServiceMenue() {
    this.whatAutopiatMenue = false;
    this.howToBuyMenue = false;
    this.sellServiceMenue = true;
    this.sellServiceMenueItemNumber = '1';
  }
  changeSellServiceItemNumber(itemNumber) {
    this.sellServiceMenueItemNumber = itemNumber;
  }

}
