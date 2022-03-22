import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FandomLayoutComponent } from './Story/Pages/Fandom-layout.component';
import { HomePageLayoutComponent } from './Story/Pages/homepage-Layout.component';
import { StoryLayoutComponent } from './Story/Pages/Story-layout.component';
import { otherLayoutComponent } from './Story/Pages/Other-layout.component';
import { BookandLiteratureLayoutComponent } from './Story/Pages/Books-and-lit-layout.component';
import { MoviesLayoutComponent } from './Story/Pages/Movies-Layout.component';
import { musicbandsLayoutComponent } from './Story/Pages/Music-and-bands-layout.component';


const routes: Routes = [
  {path: '', component: HomePageLayoutComponent},
  {path: 'All-Fandom', component: FandomLayoutComponent} ,
  {path: 'homepage', component: HomePageLayoutComponent},
  {path: 'storypage', component: StoryLayoutComponent},
  {path: 'Other', component: otherLayoutComponent}, 
  {path: 'BooksAndLiterture', component: BookandLiteratureLayoutComponent},
  {path: 'Movie', component: MoviesLayoutComponent},
  {path: 'Musicandband', component: musicbandsLayoutComponent}

];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
