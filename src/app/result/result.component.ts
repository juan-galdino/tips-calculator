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
    return (((Number(this.tip.value) * Number(this.bill.value)) / 100) / Number(this.numOfPeople.value)).toFixed(2)
  }

  getTotalByPerson() {
    return(
      (
        ((Number(this.bill.value) * Number(this.tip.value)) / 100 + Number(this.bill.value)) /
        Number(this.numOfPeople.value)
      ).toFixed(2)
    ) 
  }

  refreshPage() {
    document.location.reload()
  }
}
