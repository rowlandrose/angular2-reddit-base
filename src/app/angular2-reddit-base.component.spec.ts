import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2RedditBaseAppComponent } from '../app/angular2-reddit-base.component';

beforeEachProviders(() => [Angular2RedditBaseAppComponent]);

describe('App: Angular2RedditBase', () => {
  it('should create the app',
      inject([Angular2RedditBaseAppComponent], (app: Angular2RedditBaseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-reddit-base works!\'',
      inject([Angular2RedditBaseAppComponent], (app: Angular2RedditBaseAppComponent) => {
    expect(app.title).toEqual('angular2-reddit-base works!');
  }));
});
