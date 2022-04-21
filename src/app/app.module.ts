import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListTuteurComponent } from './list-tuteur/list-tuteur.component';
import { AddTuteurComponent } from './add-tuteur/add-tuteur.component';
import { UpdateTuteurComponent } from './update-tuteur/update-tuteur.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListTuteurComponent,
    AddTuteurComponent,
    UpdateTuteurComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
