import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'redditApp',
  templateUrl: 'redditApp.component.html',
  styleUrls: ['redditApp.component.css']
})
export class redditApp {
  title = 'redditApp works!';
  names = ['Rowland', 'Lauren', 'Gianna', 'Eli', 'Jack'];
}