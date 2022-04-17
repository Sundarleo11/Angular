import { NotFoundError } from './../Common/NotFoundError';
import { AppError } from './../Common/app-error';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: any[]


  constructor(private service: PostService) { }

  ngOnInit(): void {
    //GetMethod
    this.service.GetPost()
      .subscribe(responce => {
        // console.log(responce.json());
        this.post = responce.json();
      }, error => {
        alert("An unExcepeted error occure in GetPost")
        console.log(error);

      });

  }
  //PostMethod
  createPost(input: HTMLInputElement) {

    let post = { title: input.value }
    // let post:any = { title: input.value }
    input.value = '';
    this.post.splice(0, 0, post)

    this.service.CreatePost(post)
      .subscribe(response => {
        post['id'] = response.json().id;

        // console.log(response.json())
      }, error => {
        alert("An unExcepeted error occure in CreatePost");
        console.log(error);

      });

  }
  //UpdateMethod
  UpdatePost(post) {
    this.service.UpdatePost(post)

      .subscribe(Response => {
        console.log(Response.json());
      }, error => {
        alert("An unExcepeted error occure in UpdatePost");
        console.log(error);

      });
  }


  //DeleteMethod
  DeletePost(post) {
    let index = this.post.indexOf(post);
    this.post.splice(index, 1);
    this.service.DeletePost(post.id)


      .subscribe(
        null,
        //   Response => {

        //   //console.log(Response.json());
        // }, 
        (error: AppError) => {

          if (error instanceof NotFoundError)
            alert("This post already has been deleted")
          else {
            alert("An unExcepeted error occure in DeletePost")
            console.log(error);
          }
        });
  }

}


