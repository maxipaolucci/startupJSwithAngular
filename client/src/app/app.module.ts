import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HelloComponent} from "./components/hello/hello.component";

import '../styles.global.scss';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
