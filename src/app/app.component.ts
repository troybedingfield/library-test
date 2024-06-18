import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, BannerComponent, ExpandableComponent } from 'ngx-troy-ui';
import { ButtonComponentLocal } from './shared/components/button/button.component';
import { BannerComponentLocal } from './shared/components/banner/banner.component';
import { ToastComponentLocal } from './shared/components/toast/toast.component';
import { TOAST_STATE, ToastService } from './shared/services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    ButtonComponentLocal,
    BannerComponent,
    BannerComponentLocal,
    ToastComponentLocal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library-test';

  constructor(private toast: ToastService) { }

  showToast() {
    this.toast.showToast(
      TOAST_STATE.success,
      'Your message was sent!');
  }
}
