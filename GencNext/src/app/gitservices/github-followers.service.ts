import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {

  private url = 'https://api.github.com/users/mosh-hamedani/followers';
  followers: any[];
  constructor(private http: Http) { }

  GetAll() {
    this.http.get(this.url)

    return this.http.get(this.url)
  }
  //  this.http.get(this.url)
  //   .subscribe(responce => {
  // console.log(responce.json());
  //   this.post = responce.json();
  // })
  // this.service.GetPost()
  // .subscribe(responce => {
  //   // console.log(responce.json());
  //   this.post = responce.json();
  // }, error => {
  //   alert("An unExcepeted error occure in GetPost")
  //   console.log(error);

  // });
  // CreatePost(post) {
  //   return this.http.post(this.url, JSON.stringify(post));
  // }

  // UpdatePost(post) {
  //   return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  // }

  // DeletePost(id) {
  //   return this.http.delete(this.url + '/' + id)
  //     .catch((error: Response) => {
  //       if (error.status == 404)
  //       //   return Observable.throw(new NotFoundError())
  //       // return Observable.throw(new AppError())
  //     });
  // }
}
