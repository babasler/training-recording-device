import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { activity } from '../activity.enum';

@Component({
  selector: 'next-activity',
  imports: [CommonModule],
  templateUrl: './next-activity.component.html',
  styleUrl: './next-activity.component.scss'
})
export class NextActivityComponent {
  nextActivity: activity | null = null;
  
    constructor() {
      this.nextActivity = activity.GYM; // Default value
    }
  
    setLastActivity(activity: activity) {
      this.nextActivity = activity;
    }
    getLastActivity(): activity | null {
      return this.nextActivity; //hier vielleicht REST API call
    }

}
