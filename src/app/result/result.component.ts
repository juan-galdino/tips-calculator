import { Component } from '@angular/core';
import { TipsService } from '../tips.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  bill = this.tipsService._bill
  tip = this.tipsService._tip
  numOfPeople = this.tipsService._numOfPeople 

  constructor(private tipsService: TipsService) {}

  getTipAmountByPerson() {
    return (((this.tip.value * this.bill.value) / 100) / this.numOfPeople.value).toFixed(2)
  }

  getTotalByPerson() {
    return(
      (
        ((this.bill.value * this.tip.value) / 100 + this.bill.value) /
        this.numOfPeople.value
      ).toFixed(2)
    ) 
  }

  refreshPage() {
    document.location.reload()
  }
}
