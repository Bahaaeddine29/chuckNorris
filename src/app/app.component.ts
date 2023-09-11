import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titleHome : string  = "Chuck Norris";

  ngOnInit(): void {
      console.log("Le composant Home vient d'être changer");
  }
  
}
