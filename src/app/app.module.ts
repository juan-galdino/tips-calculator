import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { ResultComponent } from './result/result.component';
import { TipsService } from './tips.service';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
