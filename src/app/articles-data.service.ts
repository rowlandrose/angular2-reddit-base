import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ArticlesDataService {
 
  constructor(private http:Http) { }
 
  // Uses http.get() to load a single JSON file
  getArticles() {
  	let json = {'data':{'articles':[]}};
  	json.data.articles.push({
  		'title':'Angular 2',
  		'link':'http://angular.io',
  		'votes':3
  	});
  	json.data.articles.push({
  		'title':'Fullstack',
  		'link':'http://fullstack.io',
  		'votes':16
  	});
  	json.data.articles.push({
  		'title':'Rowland\'s Homepage',
  		'link':'http://rowlandrose.com',
  		'votes':57
  	});
    //return this.http.get('https://dl.dropboxusercontent.com/s/8ijycefu7mabr9g/sample_data.json?dl=0').map((res:Response) => res.json());
    return json;
  }
 
}