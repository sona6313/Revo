import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicdetailsComponent } from './components/basicdetails/basicdetails.component';
import { BigcardcolComponent } from './components/bigcardcol/bigcardcol.component';
import { BuildersComponent } from './components/builders/builders.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LastboxComponent } from './components/lastbox/lastbox.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertyComponent } from './components/property/property.component';
import { ResidentComponent } from './components/resident/resident.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'', component:LandingpageComponent},
  {path:'bas', component:BasicdetailsComponent},
  {path:'basicDetails',component:BasicdetailsComponent},
  {path:'property',component:PropertyComponent},
  {path:'er',component:ResidentComponent},
  {path:'bl',component:BuildersComponent},
  {path:'nav',component:NavbarComponent},
  {path:'ser',component:SearchComponent},
  {path:'bigcrd',component:BigcardcolComponent},
  {path:'lstbx',component:LastboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
