import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  delete(heroId: number):void {
    console.log(heroId);
  // delete heroId from herolist
    this.herolist = this.herolist.filter(h=>h.id!==heroId);
    // call my api to delete heroId
  }
  create(hero:any):void{
    // create hero in herolist
    // call my api to create hero
    console.log("udskriver vores active form module");

  }
  herolist:Hero[]=[
    {id:2,  name:"Bo",   place:"road", RealName:"Killer", debutYear:new Date()},
    {id:12, name:"Ulla", place:"road near sun", RealName:"Killer", debutYear:new Date()},
    {id:22, name:"Pia",  place:"road near flower", RealName:"some value" , debutYear:new Date()},
   ];
}
