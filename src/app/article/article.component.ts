import { Component, OnInit } from '@angular/core';

class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }
  
  voteDown(): void {
    this.votes -= 1;
  }
}

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

  article:Article;

  constructor() {}

  ngOnInit() {
    this.article = new Article('Angular 2', 'http://angular.io', 10);
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
