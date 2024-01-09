import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [ // all component defined here
    AppComponent, FirstComponent, SecondComponent, HeroComponent
  ],
  imports: [ // Modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services defined here
  bootstrap: [AppComponent] // root component - startup
})
export class AppModule { }
