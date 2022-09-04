import { Component, OnInit } from '@angular/core';
import moviesData from '../../movies.json';  


interface Movies {  
  id: Number;  
  name: String;  
  description: String;  
  imgPath: String;  
  duration: Number,
  language: String,
  userRating: String,
  genre:string[],
  mpaaRating:{
  type: string,
  label: string,
  }
}  
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = moviesData;  
  searchText:any;
  constructor() { }

  ngOnInit(): void {
  }

}
