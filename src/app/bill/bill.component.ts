import { Component } from '@angular/core';
import { TipsService } from '../tips.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {

  defaultTips: number[] = this.tipsService.defaultTips
  bill = this.tipsService._bill
  tip = this.tipsService._tip
  numOfPeople = this.tipsService._numOfPeople 

  constructor(private tipsService: TipsService) {}

}
