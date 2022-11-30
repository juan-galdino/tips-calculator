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

}
