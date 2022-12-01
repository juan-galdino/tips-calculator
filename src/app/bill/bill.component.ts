import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { TipsService } from '../tips.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {

  @ViewChildren('radio') radiosInputs!: ElementRef[]
  @ViewChild('customValue') customValue!: ElementRef 
  

  defaultTips: number[] = this.tipsService.defaultTips
  bill = this.tipsService._bill
  tip = this.tipsService._tip
  numOfPeople = this.tipsService._numOfPeople
  
  isZero = false

  constructor(private tipsService: TipsService) {}

  checkIfIsZero(input: HTMLInputElement) {
    if (input.value === "") {
      this.isZero = false
    } else if ( Number(input.value) === 0) {
      this.isZero = true
    }
  }

  setCustomTip(customTip : HTMLInputElement) {
    this.tip.value = Number(customTip.value)
  }

  disableRadioStatus() {
    [...this.radiosInputs].forEach( radio => {
      if (radio.nativeElement.checked) {
        radio.nativeElement.checked = false
        this.tip.value = this.customValue.nativeElement.value;
      }
    })
  }
}
