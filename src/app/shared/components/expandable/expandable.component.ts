import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable',
  standalone: true,
  imports: [],
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.scss',
  animations: [
    trigger('resizeX', [
      state('initial', style({ height: '0px' })),
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed => expanded', animate('200ms')),
      transition('expanded => collapsed', animate('200ms')),
      transition('* => initial', animate('0ms'))
    ]),
    trigger('resizeY', [
      state('initial', style({ width: '0px' })),
      state('collapsed', style({ width: '0px' })),
      state('expanded', style({ width: '*' })),
      transition('collapsed => expanded', animate('200ms')),
      transition('expanded => collapsed', animate('200ms')),
      transition('* => initial', animate('0ms'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandableComponentLocal implements OnInit {

  @Input() expanded: boolean | undefined;
  @Input() vertical = false;

  state = 'collapsed';

  constructor() { }

  ngOnInit() {
    this.state = this.expanded ? 'expanded' : 'collapsed';
  }

  ngOnChanges() {
    this.state = this.expanded ? 'expanded' : 'collapsed';
  }

}
