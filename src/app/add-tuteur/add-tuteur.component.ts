import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuteurService } from '../tuteur.service';
 
@Component({
  selector: 'app-add-tuteur',
  templateUrl: './add-tuteur.component.html',
  styleUrls: ['./add-tuteur.component.css']
})
export class AddTuteurComponent implements OnInit {

  tuteur :any;
  constructor(private service : TuteurService, private router : Router) { }

  ngOnInit(): void {
  }

  createTuteur(myform) {
 
    this.service.createTuteur(myform).subscribe(
    response => {
    console.log(response);
  this.router.navigate(['listTuteur']);

    }
    );
    
   }
    
   }
   
