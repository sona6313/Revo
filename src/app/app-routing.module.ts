import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicdetailsComponent } from './components/basicdetails/basicdetails.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertyComponent } from './components/property/property.component';

const routes: Routes = [
  {path:'', component:LandingpageComponent},
  {path:'bas', component:BasicdetailsComponent},
  {path:'basicDetails',component:BasicdetailsComponent},
  {path:'property',component:PropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
