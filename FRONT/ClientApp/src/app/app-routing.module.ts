import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MixJuiceComponent } from "./mix-juice/mix-juice.component";



const routes: Routes = [
    { path: '**', component: MixJuiceComponent, pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }