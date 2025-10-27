import { Component, ChangeDetectionStrategy, signal, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'activity-detail-page',
  templateUrl: './activity-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ActivityDetailPageComponent {
  activity = input<any>();
  goBack = output<void>();
  isAboutExpanded = signal(false);

  toggleAbout() {
    this.isAboutExpanded.update(value => !value);
  }

  onGoBack() {
    this.goBack.emit();
  }
}