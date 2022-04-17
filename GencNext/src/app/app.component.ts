import { Component } from '@angular/core';
import { myfav } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'something';

  courses;

  // courses = [
  //   { id: 1, name: 'course1' },
  //   { id: 2, name: 'course2' },
  //   { id: 3, name: 'course3' },
  // ];

  loadcourse() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];

  }
  trackcourse(index, courses) {
    return courses ? this.courses.id : undefined;
  }
  Add() {
    this.courses.push({ id: 4, name: 'course4' });
  }
  OnRemove(courses) {
    let index = this.courses.indexOf(courses);
    this.courses.splice(index, 1);


  }
  course = [1, 2, 3];
  post = {
    title: 'GencNext',
    isFavorite: true
  }

  // onfav(isFavorite) {
  //   console.log("changed :", isFavorite);
  // }

  onfav(eventArgs: myfav) {
    console.log("changed :", eventArgs);
  }
}

