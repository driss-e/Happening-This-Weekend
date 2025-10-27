import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class LoginPageComponent {
  loginSuccess = output<void>();
  activeTab = signal<'login' | 'signup'>('login');
  passwordVisible = signal(false);

  setActiveTab(tab: 'login' | 'signup') {
    this.activeTab.set(tab);
  }

  togglePasswordVisibility() {
    this.passwordVisible.update(visible => !visible);
  }

  submitLogin() {
    // In a real app, you would handle authentication here.
    // For this demo, we'll just emit the success event.
    this.loginSuccess.emit();
  }
}