import { Component } from '@angular/core';
import { activity } from '../activity.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'last-activity',
  imports: [CommonModule],
  templateUrl: './last-activity.component.html',
  styleUrl: './last-activity.component.scss'
})
export class LastActivityComponent {
  lastActivity: activity | null = null;

  constructor() {
    this.lastActivity = activity.GYM; // Default value
  }

  setLastActivity(activity: activity) {
    this.lastActivity = activity;
  }
  getLastActivity(): activity | null {
    return this.lastActivity; //hier vielleicht REST API call
  }


}
