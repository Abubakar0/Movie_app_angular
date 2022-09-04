import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
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
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  data!:any
  movies: Movies[] = moviesData;  
  details!:any
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params)
    this.data=this.router.snapshot.paramMap.get('id')
    this.details=this.movies.find( (x: { id: any; }) => x.id == this.data)
  }

}
