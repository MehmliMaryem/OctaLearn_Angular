import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTuteurComponent } from './add-tuteur/add-tuteur.component';
import { ListTuteurComponent } from './list-tuteur/list-tuteur.component';
import { UpdateTuteurComponent } from './update-tuteur/update-tuteur.component';
  
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listTuteur", component: ListTuteurComponent},
  { path: "addTuteur", component: AddTuteurComponent  },
  { path: "updateTuteur/:id", component: UpdateTuteurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
