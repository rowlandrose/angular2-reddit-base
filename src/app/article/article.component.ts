import { Component, OnInit } from '@angular/core';
import {ArticleDataService} from '../article-data.service';

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

  article:ArticleDataService;

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
