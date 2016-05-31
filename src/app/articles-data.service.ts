import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ArticlesDataService {
 
  constructor(private http:Http) { }
 
  // Uses http.get() to load a single JSON file
  getArticles() {
    return this.http.get('https://dl.dropboxusercontent.com/s/8ijycefu7mabr9g/sample_data.json?dl=0').map((res:Response) => res.json());
  }
 
}