import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, BannerComponent, ExpandableComponent } from 'ngx-troy-ui';
import { ButtonComponentLocal } from './shared/components/button/button.component';
import { BannerComponentLocal } from './shared/components/banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, ButtonComponentLocal, BannerComponent, BannerComponentLocal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library-test';
}
