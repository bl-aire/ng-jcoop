import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
    </div>
    `
})
export class EventsAppComponent {
  title = 'angular-jcoop';
}
