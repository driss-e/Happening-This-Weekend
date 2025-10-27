import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class HomePageComponent {
  viewDetails = output<any>();
  
  activeFilter = signal('All');

  weekendEvents = signal([
    {
      id: 1,
      title: 'Golden Gate Park Sunset Concert',
      location: 'Golden Gate Park Bandshell',
      attendees: 28,
      date: 'SAT, OCT 26',
      image: 'https://picsum.photos/seed/concert/800/600'
    }
  ]);

  trendingEvents = signal([
    {
      id: 2,
      title: 'Bay Area Food & Wine Festival',
      location: 'Fort Mason Center',
      attendees: 112,
      date: 'FRI, OCT 25',
      image: 'https://picsum.photos/seed/festival/800/600'
    },
    {
      id: 3,
      title: 'Watercolor Workshop for Beginners',
      location: 'Mission Art Studio',
      attendees: 12,
      date: 'SUN, OCT 27',
      image: 'https://picsum.photos/seed/workshop/800/600'
    }
  ]);
  
  filters = ['All', 'Music', 'Food', 'Sports'];
  
  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  onViewDetails(event: any) {
    this.viewDetails.emit(event);
  }
}