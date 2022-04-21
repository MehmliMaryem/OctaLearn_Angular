import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TuteurService {
  urlTuteurs ="http://127.0.0.1:8080/tuteur";
  tuteur: any;
  constructor(private Http: HttpClient) { }
  
  listTuteurs(){
    return this.Http.get(this.urlTuteurs+'/list');
  }

  createTuteur(myform:any){
this.tuteur={
  'name' :myform.value.tuteurName,
  'email' :myform.value.tuteurEmail,
  'specialite': myform.value.tuteurSpecialite
}
return this.Http.post(this.urlTuteurs+'/add',this.tuteur);
  }

updateTuteur(myObj:any){
  console.log(myObj);
  return this.Http.put(this.urlTuteurs+'/'+myObj['id'], myObj);
}

deleteTuteur(myObj:any){
  console.log(myObj);
  return this.Http.delete(this.urlTuteurs+'/'+myObj['id'], myObj);
}

getTuteur(id:any){
  return this.Http.get(this.urlTuteurs+'/'+id);
}

}
