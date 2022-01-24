import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavbarComponent } from 'src/Navagation/topnavbar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
