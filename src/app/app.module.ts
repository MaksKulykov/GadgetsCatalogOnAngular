import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ModifyPopularPipe} from './modify-popular.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    ModifyPopularPipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
