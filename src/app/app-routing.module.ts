import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './MyComponent/movie-details/movie-details.component';
import { MoviesComponent } from './MyComponent/movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
