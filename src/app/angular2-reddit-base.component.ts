import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'angular2-reddit-base-app',
  templateUrl: 'angular2-reddit-base.component.html',
  styleUrls: ['angular2-reddit-base.component.css']
})
export class Angular2RedditBaseAppComponent {
  title = 'angular2-reddit-base works!';
  names = ['Rowland', 'Lauren', 'Gianna', 'Eli', 'Jack'];
}