import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { TipsService } from '../tips.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})

export class BillComponent {

  @ViewChildren('radio') radiosInputs!: ElementRef[]
  @ViewChild('customTip') customValue!: ElementRef 

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
        this.tip.value = Number(this.customValue.nativeElement.value);
      }
    })
  }


  // Validation

  // Restricts input for the given textbox to the given inputFilter.
 setInputFilter(textbox: Element, inputFilter: (value: string) => boolean): void {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
    textbox.addEventListener(event, function(this: HTMLInputElement  & { oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null }) {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      }
      else if (Object.prototype.hasOwnProperty.call(this, "oldValue")) {
        this.value = this.oldValue;
        
        if (this.oldSelectionStart !== null &&
          this.oldSelectionEnd !== null) {
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      }
      else {
        this.value = "";
      }
    });
  });
}


// Install input filters.
callInputFilter(htmlInput: HTMLInputElement) {

  if(htmlInput.ariaLabel != "Value of Bill") {
    this.setInputFilter(htmlInput, function teste(value: string) {
      return /^-?\d*$/.test(value);
      // interger greater than 0 regexp
    })
  } else {
    this.setInputFilter(htmlInput, function teste(value: string) {
      return /^-?\d*[.,]?\d{0,2}$/.test(value);
      // currency regexp
    })
  }
};

}