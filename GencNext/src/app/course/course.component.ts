import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  // templateUrl: './course.component.html',
  // styleUrls: ['./course.component.css']
  // <h2>{{title}}</h2>
  template: `
     <h2 [textContent]="title"></h2>
  
  <ul>
  <li *ngFor="let c of course">
     
  {{c}}

  </li>
  </ul>

  <table>
   <tr>
   <td [attr.colSapn]="colspan"></td>
   </tr>
  </table>

  <button class="btn btn-primary"[class.active]="isActive">save</button><br><br>
  <button [style.backgroundColor]="isActive ? 'red':'blue'">submit</button>
  <div (click)="onM()">
  <button (click)="onSave($event)">button</button>
  </div>
  <br>
   <input (keyup.enter)="onkeyup($event)"/><br>

   <br>
   <input [(ngModel)]="email" (keyup.enter)="onkey()"/><br>


        {{ courses.rating | number:'2.1-1'}}<br>
        {{courses.Student | number}}<br>
        {{courses.currency | currency:'AUD':true:'2.1-1'}}<br>
        {{courses.NewData | date:"shortDate"}}
        <br><br>


        {{text | summary}}

  `
})
export class CourseComponent implements OnInit {

  text = `
  The most basic of pipe transforms a single value, into a new value.
 This value can be anything you like, a string, array, object, etc
  `

  email = "abc@gmail.com";
  onkey() {
    console.log(this.email);
  }
  courses = {

    title: "List of books",
    rating: 46778,
    Student: 34567,
    currency: 2356,
    NewData: new Date(2019, 1, 12)
  }

  onkeyup($event) {
    console.log($event.target.value)
  }
  onM() {
    console.log("div was worked");
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("button was clicked", $event);
  }
  title = "course";
  colSapn = 2;
  isActive = true;

  course = ["course1", "course2", "course3"];
  constructor() { }

  ngOnInit() {
  }

}
