import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import {ArticleDataService} from './article-data.service';

@Component({
  moduleId: module.id,
  selector: 'reddit',
  templateUrl: 'redditApp.component.html',
  styleUrls: ['redditApp.component.css'],
  directives: [ArticleComponent] 
})
export class redditApp {
	
	articles: ArticleDataService[];

	constructor() {
		this.articles = [
			new ArticleDataService('Angular 2', 'http://angular.io', 3),
			new ArticleDataService('Fullstack', 'http://fullstack.io', 2),
			new ArticleDataService('Angular Homepage', 'http://angular.io', 1),
		];
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
	} 
}