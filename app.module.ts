import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavbarComponent } from 'src/app/NavagationTop/topnavbar.component';
import { TopNavbar2Component } from 'src/app/NavagationTop/DropTopnavbar.component';
import { AppComponent } from './app.component';
import { StoryCard } from 'src/app/Story/storyCard.component';
import { FilterBar } from 'src/app/Story/FilterBar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { FandomLayoutComponent } from './Story/Fandom-layout.component';
import { StoryLayoutComponent } from './Story/Story-layout.component';
import { HomePageLayoutComponent } from './Story/homepage-Layout.component';
import { otherLayoutComponent } from './Story/Other-layout.component';
import { MoviesLayoutComponent } from './Pages/Movies-Layout.component';
import { musicbandsLayoutComponent } from './Pages/Music-and-bands-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    TopNavbar2Component,
    StoryCard,
    FilterBar,
    HeroesComponent,
    FandomLayoutComponent,
    StoryLayoutComponent,
    HomePageLayoutComponent, 
    otherLayoutComponent,
    MoviesLayoutComponent, 
    musicbandsLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
