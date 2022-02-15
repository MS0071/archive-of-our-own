import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FandomLayoutComponent } from './Story/Fandom-layout.component';
import { HomePageLayoutComponent } from './Story/homepage-Layout.component';
import { StoryLayoutComponent } from './Story/Story-layout.component';
import { otherLayoutComponent } from './Story/Other-layout.component';
import { BookandLiteratureLayoutComponent } from './Story/Books-and-lit-layout.component';
import { MoviesLayoutComponent } from './Pages/Movies-Layout.component';
import { musicbandsLayoutComponent } from './Pages/Music-and-bands-layout.component';


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
