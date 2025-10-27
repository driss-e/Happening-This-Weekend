import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class DashboardPageComponent {
  activeTab = signal<'activities' | 'reviews'>('activities');

  upcomingActivities = signal([
    {
      title: 'Kayaking on the Bay',
      date: 'Sat, Oct 26, 10:00 AM',
      location: 'Pier 39, San Francisco',
      image: 'https://picsum.photos/seed/bay/800/600'
    },
    {
      title: 'Pottery Workshop',
      date: 'Wed, Nov 6, 6:00 PM',
      location: 'Mission District Art Studio',
      image: 'https://picsum.photos/seed/pottery/800/600'
    }
  ]);
  
  selectTab(tab: 'activities' | 'reviews') {
    this.activeTab.set(tab);
  }
}