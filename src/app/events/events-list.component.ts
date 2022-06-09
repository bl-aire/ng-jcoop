import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.shared";

declare let toastr:any

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h2>Upcoming Angular Events</h2>
        <hr>
        <div class="row">
            <div  *ngFor="let event of events" class="col-md-5 ">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>`
})
export class EventsListComponent implements OnInit {
    events: any[] = [];

    constructor (private eventService: EventService) {
        
    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }
    
    handleThumbnailClick(eventName: any) {
        toastr.success(eventName)
    }
}