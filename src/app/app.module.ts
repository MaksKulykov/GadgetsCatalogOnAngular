import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ModifyPopularPipe} from './modify-popular.pipe';
import { ModifyDatePipe } from './modify-date.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    ModifyPopularPipe,
    ModifyDatePipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
