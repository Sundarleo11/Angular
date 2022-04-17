import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
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
