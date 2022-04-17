import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  log(x) {
    console.log("button was touched ", x);
  }

  submit(f) {
    console.log(f);
  }

  contactMethod = [
    { id: 1, name: "Mail" },
    { id: 2, name: "phone" }
  ]

}
