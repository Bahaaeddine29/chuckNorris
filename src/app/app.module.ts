import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChuckComponent } from './chuck/chuck.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondPageComponent,
    NavbarComponent,
    ChuckComponent
  ],
  imports: [

    //fonctionnalités
    BrowserModule,
    HttpClientModule, 

    //Composant et Module 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
