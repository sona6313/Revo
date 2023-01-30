import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasicdetailsComponent } from './components/basicdetails/basicdetails.component';
import { PropertyComponent } from './components/property/property.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasicdetailsComponent,
    PropertyComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
