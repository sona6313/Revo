import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasicdetailsComponent } from './components/basicdetails/basicdetails.component';
import { PropertyComponent } from './components/property/property.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LandfooterComponent } from './components/landfooter/landfooter.component';
import { ResidentComponent } from './components/resident/resident.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasicdetailsComponent,
    PropertyComponent,
    LandingpageComponent,
    LandfooterComponent,
    ResidentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
