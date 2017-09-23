import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeDataService } from './services/home-data.service';
import { LinksDataService } from './services/links-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeDataService, LinksDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
