import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'chart',
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class chartComponent {
  @Input() header: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
}
