import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home/home.component';
import { ActivityDetailPageComponent } from './components/activity-detail/activity-detail.component';
import { ReviewsPageComponent } from './components/reviews/reviews.component';
import { DashboardPageComponent } from './components/dashboard/dashboard.component';
import { BottomNavComponent } from './components/shared/bottom-nav/bottom-nav.component';

export type Page = 'login' | 'home' | 'activityDetail' | 'reviews' | 'dashboard' | 'myEvents' | 'messages' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    LoginPageComponent,
    HomePageComponent,
    ActivityDetailPageComponent,
    ReviewsPageComponent,
    DashboardPageComponent,
    BottomNavComponent
  ],
})
export class AppComponent {
  isLoggedIn = signal(false);
  currentPage = signal<Page>('home');
  selectedActivity = signal<any>(null);

  constructor() {
    // Start with login page if not logged in
    if (!this.isLoggedIn()) {
        this.currentPage.set('login');
    }
  }

  handleLoginSuccess() {
    this.isLoggedIn.set(true);
    this.currentPage.set('home');
  }

  handleNavigation(page: Page) {
    if (page === 'profile') {
      this.currentPage.set('dashboard');
    } else {
      this.currentPage.set(page);
    }
  }
  
  viewActivityDetails(activity: any) {
    this.selectedActivity.set(activity);
    this.currentPage.set('activityDetail');
  }
  
  viewReviews() {
    this.currentPage.set('reviews');
  }

  goBack() {
    // A simple back navigation logic
    if (this.currentPage() === 'activityDetail' || this.currentPage() === 'reviews') {
      this.currentPage.set('home');
    } else if (this.currentPage() === 'dashboard') {
        this.currentPage.set('home');
    }
  }
}