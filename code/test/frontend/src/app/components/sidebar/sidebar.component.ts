import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class SidebarComponent {
    visible: boolean = false;
}