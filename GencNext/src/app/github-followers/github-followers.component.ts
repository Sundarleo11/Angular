import { GithubFollowersService } from './../gitservices/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.GetAll()
      //  .subscribe(followers => this.followers = followers);
      .subscribe(Response => {
        this.followers = Response.json();
      })

  }

}
