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
import { BuildersComponent } from './components/builders/builders.component';
import { SearchComponent } from './components/search/search.component';
import { BigcardcolComponent } from './components/bigcardcol/bigcardcol.component';
import { LastboxComponent } from './components/lastbox/lastbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasicdetailsComponent,
    PropertyComponent,
    LandingpageComponent,
    LandfooterComponent,
    ResidentComponent,
    BuildersComponent,
    SearchComponent,
    BigcardcolComponent,
    LastboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
