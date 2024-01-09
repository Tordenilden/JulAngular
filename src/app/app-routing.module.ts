import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  { path: 'side1', component: FirstComponent },
  { path: 'side2', component: SecondComponent },
  { path: 'hero', component: HeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
