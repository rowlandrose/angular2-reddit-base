import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import {ArticleDataService} from './article-data.service';
import {ArticlesDataService} from './articles-data.service';

@Component({
  moduleId: module.id,
  selector: 'reddit',
  templateUrl: 'redditApp.component.html',
  styleUrls: ['redditApp.component.css'],
  directives: [ArticleComponent] 
})
export class redditApp {
	
	articles: ArticleDataService[];
	articles_data: ArticlesDataService;

	constructor() {
		/*this.articles = [
			new ArticleDataService('Angular 2', 'http://angular.io', 3),
			new ArticleDataService('Fullstack', 'http://fullstack.io', 2),
			new ArticleDataService('Angular Homepage', 'http://angular.io', 1),
		];*/
		let articles_json = this.articles_data.getArticles().subscribe(
			data => {
				for(let i = 0; i < data.data.articles.length; i++) {
					let a = data.data.articles[i];
					this.articles.push(
						new ArticleDataService(a.title, a.link, a.votes)
					);
				}
			},
			err => { alert('error') }
		);
		
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		this.articles.push(new ArticleDataService(title.value, link.value, 0));
	    title.value = '';
	    link.value = '';
	} 
}