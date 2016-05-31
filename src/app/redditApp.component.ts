import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import {Http, Response} from '@angular/http';
import {ArticleDataService} from './article-data.service';
import {ArticlesDataService} from './articles-data.service';

@Component({
  moduleId: module.id,
  selector: 'reddit',
  templateUrl: 'redditApp.component.html',
  styleUrls: ['redditApp.component.css'],
  directives: [ArticleComponent],
  providers: [ArticlesDataService] 
})
export class redditApp {
	
	articles: ArticleDataService[];
	articles_data: ArticlesDataService;
	http:Http;

	constructor() {
		/*this.articles = [
			new ArticleDataService('Angular 2', 'http://angular.io', 3),
			new ArticleDataService('Fullstack', 'http://fullstack.io', 2),
			new ArticleDataService('Angular Homepage', 'http://angular.io', 1),
		];*/
		this.articles_data = new ArticlesDataService(this.http);
		let articles_json = this.articles_data.getArticles();
		for(let i = 0; i < articles_json.data.articles.length; i++) {
			let a = articles_json.data.articles[i];
			this.articles.push(
				new ArticleDataService(a.title, a.link, a.votes)
			);
		}
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		this.articles.push(new ArticleDataService(title.value, link.value, 0));
	    title.value = '';
	    link.value = '';
	} 
}