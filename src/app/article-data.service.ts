import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ArticleDataService {

	private _url = 'http://www.rowlandrose.com/experiments/angular2-reddit-base/';
	
	constructor(private http: Http) { }

	getArticles() {
		return this.http.get(this._url)
			.map(response => response.json());
	}
}