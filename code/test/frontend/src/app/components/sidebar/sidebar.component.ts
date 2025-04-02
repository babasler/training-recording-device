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

    closeCallback(): void {
        this.visible = false;
    }
    visible: boolean = false;
}