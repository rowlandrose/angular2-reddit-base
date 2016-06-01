import { Component, OnInit } from '@angular/core';
import {ArticleModel} from '../article-model.directive';

@Component({
  moduleId: module.id,
  selector: 'reddit-article',
  inputs: ['article'],
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

  article:ArticleModel;

  ngOnInit() {}

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
