import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <events-list></events-list>
    </div>
    `
})
export class EventsAppComponent {
  title = 'angular-jcoop';
}
