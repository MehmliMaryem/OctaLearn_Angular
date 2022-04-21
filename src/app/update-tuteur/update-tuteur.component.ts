import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuteurService } from '../tuteur.service';

@Component({
  selector: 'app-update-tuteur',
  templateUrl: './update-tuteur.component.html',
  styleUrls: ['./update-tuteur.component.css']
})
export class UpdateTuteurComponent implements OnInit {

  public id: any;
  public tuteurToUpdate:any;
  public name :any;
  public email:any;
  public Specialite:any;
  constructor(private service:TuteurService, private router :Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  console.log(this.id);
    this.tuteurToUpdate= this.service.getTuteur(this.id).subscribe(
      response =>{
        this.name =response ["name"];
        this.email= response["email"];
        this.Specialite= response["specialite"];
      }
    );
  }

  updateTuteur(){
    this.tuteurToUpdate={       
      'id':this.id,
      'name': this.name,
       'email':this.email,
       'specialite':this.Specialite
    }
     this.service.updateTuteur(this.tuteurToUpdate).subscribe(response=>{console.log(response);});
    this.router.navigate(['listTuteur']);
  }

}
