import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h2>Upcoming Angular Events</h2>
    <hr>
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
</div>`
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        time: '10:00 am',
        date: '9/26/2036',
        price: 599.99,
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data:string) {
        console.log('recieved:', data)
    }
}