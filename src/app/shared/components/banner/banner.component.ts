import { Component, Input } from '@angular/core';
import { ExpandableComponentLocal } from '../expandable/expandable.component';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ExpandableComponentLocal, NgTemplateOutlet, NgIf, NgClass, NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponentLocal {
  @Input() primaryText = '';
  @Input() detailMessages: string[] | undefined;
  @Input() color: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() showClose = false;

  isExpanded: boolean = true;
  showBanner = true;

  constructor() { }

  ngOnInit(): void {
  }

  onExpandCollapse() {
    this.isExpanded = !this.isExpanded;
  }

  onCloseClick(): void {
    this.showBanner = false;
  }
}
