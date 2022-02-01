import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavbarComponent } from 'src/app/NavagationTop/topnavbar.component';
import { TopNavbar2Component } from 'src/app/NavagationTop/DropTopnavbar.component';
import { AppComponent } from './app.component';
import { StoryCard } from 'src/app/Story/storyCard.component';
import { FilterBar } from 'src/app/Filter/FilterBar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    TopNavbar2Component,
    StoryCard,
    FilterBar

    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
