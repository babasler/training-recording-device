import { SidebarComponent } from "../sidebar/sidebar.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
//import { AppConfigService } from '../../services/appconfigservice';
import { ChartModule } from 'primeng/chart';
import { WeightChartComponent } from "./weight-chart/weight-chart.component";
import { VolumeChartComponent } from "./volume-chart/volume-chart.component";
import { SetsChartComponent } from "./sets-chart/sets-chart.component";
import { SelectPeriodeBarComponent } from "./select-periode-bar/select-periode-bar.component";


@Component({
  selector: 'app-dashboard-component',
  imports: [SidebarComponent, ButtonModule, CommonModule, ChartModule, WeightChartComponent, VolumeChartComponent, SetsChartComponent, SelectPeriodeBarComponent],
  templateUrl: './dashboard-component.component.html',
  styleUrl: './dashboard-component.component.scss'
})
export class DashboardComponent{
  currentDiv: string = 'div1'; // Startwert
}
