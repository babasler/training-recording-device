import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { DashboardComponent } from './components/dashboard/dashboard-component.component';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ButtonModule,SplitterModule,RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private router: Router) {} 
  
  ngOnInit() {
    // Direktes Weiterleiten zur '/dashboard' Route
    this.router.navigate(['/dashboard']);
  }

}
