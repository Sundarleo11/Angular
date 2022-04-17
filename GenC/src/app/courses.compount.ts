import { courseService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `{{  title }}

      <ul>
      <li *ngFor="let course of courses">
         

           {{ course }}
      
      </li>
      
      </ul>
    
    
    
    `
})


export class courseCompount {
    title = "List of courese";

    courses: any[];

    constructor(service: courseService) {
        ///  let service = new courseService(); tightly couple

        this.courses = service.getCourses();
    }


    // gettitle() {
    //     return this.title;
    // }
}