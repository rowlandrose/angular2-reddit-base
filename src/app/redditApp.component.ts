import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import {ArticleModel} from './article-model.directive';
import {ArticleDataService} from './article-data.service';

@Component({
  moduleId: module.id,
  selector: 'reddit',
  templateUrl: 'redditApp.component.html',
  styleUrls: ['redditApp.component.css'],
  directives: [ArticleComponent],
  providers: [ArticleDataService]
})
export class redditApp {
	
	articles: ArticleModel[];

	constructor(private _articleDataService: ArticleDataService) {

		this.articles = [];

		this._articleDataService.getArticles().subscribe(
			result => this.articlesLoaded(result)
		);
	}

	articlesLoaded(result) {

		for (let i = 0; i < result.data.articles.length; i++) {
			let a = result.data.articles[i];
			this.articles.push(new ArticleModel(a.title, a.link, a.votes));
		}
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
		this.articles.push(new ArticleModel(title.value, link.value, 0));
	    title.value = '';
	    link.value = '';
	} 
}