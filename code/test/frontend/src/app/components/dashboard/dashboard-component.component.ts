import { SidebarComponent } from "../sidebar/sidebar.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { WeightChartComponent } from "./weight-chart/weight-chart.component";
import { VolumeChartComponent } from "./volume-chart/volume-chart.component";
import { SetsChartComponent } from "./sets-chart/sets-chart.component";
import { SelectPeriodeBarComponent } from "./select-periode-bar/select-periode-bar.component";


@Component({
  selector: 'app-dashboard-component',
  imports: [SidebarComponent, ButtonModule, CommonModule, ChartModule, WeightChartComponent, VolumeChartComponent, SetsChartComponent, SelectPeriodeBarComponent],
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss'],
  standalone: true,
})
export class DashboardComponent{

  currentDiv: string = 'div1'; // Startwert
  userName: string = 'Max Mustermann';

  data: string = '';


  constructor() {
    
  }

  async ngOnInit() {
    await fetch('http://localhost:8084/data').then(async response => {
      this.data = await response.text();
    }
    ).catch(error => {
      console.error('Error fetching data:', error);
    });
    console.log(this.data);
  }



}