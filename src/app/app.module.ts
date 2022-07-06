import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavComponent } from './nav/navbar.component';

import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?')
      return true
}
