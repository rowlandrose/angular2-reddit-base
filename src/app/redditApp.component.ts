import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import {ArticleModel} from './article-model.directive';
import {ArticleDataService} from './article-data.service';

@Component({
  moduleId: module.id,
  selector: 'reddit',
  templateUrl: 'redditApp.component.html',
  styleUrls: ['redditApp.component.css'],
  directives: [ArticleComponent] 
})
export class redditApp {
	
	articles: ArticleModel[];
	articles_data;

	constructor(private _articleDataService: ArticleDataService) {

		this.articles_data = [];

		this._articleDataService.getArticles().subscribe(
			result => this.articlesLoaded(result)
		);

		this.articles = [
			new ArticleModel('Angular 2', 'http://angular.io', 3),
			new ArticleModel('Fullstack', 'http://fullstack.io', 2),
			new ArticleModel('Angular Homepage', 'http://angular.io', 1),
		];
	}

	articlesLoaded(result) {

		console.log(result);
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		this.articles.push(new ArticleModel(title.value, link.value, 0));
	    title.value = '';
	    link.value = '';
	} 
}