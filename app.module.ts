import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavbarComponent } from 'src/app/NavagationTop/topnavbar.component';
import { TopNavbar2Component } from 'src/app/NavagationTop/DropTopnavbar.component';
import { AppComponent } from './app.component';
import { StoryCard } from 'src/app/Story/storyCard.component';
import { FilterBar } from 'src/app/Story/Filter/FilterBar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { FandomLayoutComponent } from './Story/Pages/Fandom-layout.component';
import { StoryLayoutComponent } from './Story/Pages/Story-layout.component';
import { HomePageLayoutComponent } from './Story/Pages/homepage-Layout.component';
import { otherLayoutComponent } from './Story/Pages/Other-layout.component';
import { MoviesLayoutComponent } from './Story/Pages/Movies-Layout.component';
import { musicbandsLayoutComponent } from './Story/Pages/Music-and-bands-layout.component';
import { MediaCard } from './Story/mediaCard.component';
import {HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddStoryComponent } from './Story/add-story/add-story.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    TopNavbar2Component,
    StoryCard,
    MediaCard,
    FilterBar,
    HeroesComponent,
    FandomLayoutComponent,
    StoryLayoutComponent,
    HomePageLayoutComponent, 
    otherLayoutComponent,
    MoviesLayoutComponent, 
    musicbandsLayoutComponent,
    AddStoryComponent,
    AuthenticationComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
