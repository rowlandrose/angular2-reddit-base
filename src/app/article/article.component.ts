import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'reddit-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  ngOnInit() {}

  voteUp() {
    this.votes += 1;
    return false;
  }
  
  voteDown() {
    this.votes -= 1;
    return false;
  }

}
