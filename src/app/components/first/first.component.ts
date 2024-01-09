import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
// myMethodBandit() {
// throw new Error('Method not implemented.');//}



  myMethod():void {
    console.log("myMethod");
  }
  // variables
  tekst:string = "Hello World"; // typescript
  tekst2 = "Hello World 2"; // javascript
  myArray:number[] = [1,2,3,4,5,6,7,8,9,10];
  everything:any; // nice!!
  login:boolean = true;
  //methods
  // ctor
  // noraml
  // angularspecific
  // lifecycle
  ngOnInit(): void {
    console.log("ngOnInit");
    console.log(this.myArray);
    let myArray2:number[] = [2,4,6,8]; //lokal variable
    console.log(myArray2);

  }
}
