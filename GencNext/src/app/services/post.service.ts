import { NotFoundError } from './../Common/NotFoundError';
import { AppError } from './../Common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  post: any[];
  constructor(private http: Http) { }

  GetPost() {
    return this.http.get(this.url)
  }

  CreatePost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  UpdatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  DeletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if (error.status == 404)
          return Observable.throw(new NotFoundError())
        return Observable.throw(new AppError())
      });
  }
}
