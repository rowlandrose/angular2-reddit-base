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
class ArticleInner {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
}
export class ArticleComponent implements OnInit {

  article:ArticleInner;

  constructor() {
    this.article = new ArticleInner('Angular 2', 'http://angular.io', 10);
  }

  ngOnInit() {}

  voteUp() {
    this.article.votes += 1;
    return false;
  }
  
  voteDown() {
    this.article.votes -= 1;
    return false;
  }

}
