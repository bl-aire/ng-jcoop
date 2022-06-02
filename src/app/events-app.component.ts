import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <nav-bar></nav-bar>
      <events-list></events-list>
    </div>
    `
})
export class EventsAppComponent {
  title = 'angular-jcoop';
}
