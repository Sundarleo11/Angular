import { AuthorService } from './author.service';
import { courseService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { courseCompount } from './courses.compount';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    courseCompount,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    courseService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
