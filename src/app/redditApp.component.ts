import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'reddit',
  templateUrl: 'redditApp.component.html',
  styleUrls: ['redditApp.component.css']
})
export class redditApp {
	
	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		console.log(`Adding article title: ${title.value} and link: ${link.value}`);
	} 
}