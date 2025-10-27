import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'reviews-page',
  templateUrl: './reviews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ReviewsPageComponent {
  goBack = output<void>();
  rating = signal(0);
  hoverRating = signal(0);
  
  reviews = signal([
    {
        name: 'Alex Johnson',
        avatar: 'https://i.pravatar.cc/150?u=alex',
        time: '2 days ago',
        rating: 5,
        comment: 'Absolutely breathtaking views! The trail was well-maintained and the perfect difficulty. A must-do for anyone in the area. Highly recommend going early to catch the sunrise.'
    },
    {
        name: 'Maria Garcia',
        avatar: 'https://i.pravatar.cc/150?u=maria',
        time: '1 week ago',
        rating: 4,
        comment: 'Great hike, but it was a bit crowded on the weekend. The path can get narrow in some spots, so be prepared to share the trail. The waterfall at the end was worth it!'
    }
  ]);

  setRating(newRating: number) {
    this.rating.set(newRating);
  }

  setHoverRating(newRating: number) {
    this.hoverRating.set(newRating);
  }
  
  onGoBack() {
    this.goBack.emit();
  }
}