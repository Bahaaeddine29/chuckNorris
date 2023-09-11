import { JokeInterface } from './../joke.interface';
import { JokeService } from './../joke.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  joke : JokeInterface | undefined;  

  constructor (private JokeService: JokeService) { 

  }

  ngOnInit(): void {
      
    this.JokeService.getJoke().subscribe( jokeTranslate => { 

     this.joke = jokeTranslate; 
        console.log("votre blague est égal à :" + jokeTranslate.value)
      

      }
    ); 

  }
}
