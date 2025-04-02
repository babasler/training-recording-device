import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [DrawerModule, ButtonModule, AvatarModule]
})
export class SidebarComponent {
    constructor(private router: Router) {
        this.visible = false;
    }

    goToDashboard(): void {
        this.router.navigate(['/dashboard']);
    }

    goToNewExercise(): void {
        this.router.navigate(['/new/exercise']);
    }

    goToNewPlan(): void {
        this.router.navigate(['/new/plan']);
    }
    goToStatistic(): void {
        this.router.navigate(['/statistic']);
    }
    goToProfile(): void {
        this.router.navigate(['/profile']);
    }
    closeCallback(): void {
        this.visible = false;
    }
    visible: boolean = false;
}