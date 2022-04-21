import { TuteurService } from '../tuteur.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-list-tuteur',
  templateUrl: './list-tuteur.component.html',
  styleUrls: ['./list-tuteur.component.css']
})
export class ListTuteurComponent implements OnInit {

  tuteurs :any;
  constructor(private service :TuteurService,private router :Router) { }

  ngOnInit(): void {
    this.service.listTuteurs().subscribe(
      response=>{
        this.tuteurs=response;
      });
  }

 deleteTuteur(myObj:any) {
  //console.log(this.provider);
  this.service.deleteTuteur(myObj).subscribe(response => {
  console.log(response);
  this.refreshListTuteurs();
  })
  }
  refreshListTuteurs() {
  this.service.listTuteurs().subscribe(
  response => {
  this.tuteurs= response;
  }
  );
  }
  updateTuteur(myObj:any) {
  this.router.navigate(['updateTuteur' + '/' + myObj['id']]);
  }
 }
