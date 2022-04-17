// import { courseCompount } from './../../../GenC/src/app/courses.compount';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { Pipesumary } from './summary.pipe.component';
import { InputFormateDirective } from './input-formate.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GithubFollowersService } from './gitservices/github-followers.service';
// import { HomeComponent } from './home/home.component';
// import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    Pipesumary,
    InputFormateDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '/', component: CourseFormComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'profile/:username', component: GitHubProfileComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ])
    // HttpClient
    //  HttpCli
  ],
  providers: [
    PostService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
