import { SidebarComponent } from "../sidebar/sidebar.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { WeightChartComponent } from "./weight-chart/weight-chart.component";
import { VolumeChartComponent } from "./volume-chart/volume-chart.component";
import { SetsChartComponent } from "./sets-chart/sets-chart.component";
import { SelectPeriodeBarComponent } from "./select-periode-bar/select-periode-bar.component";
import { LastActivityComponent } from "./chart/chart.component";

interface chartData{
  header: string,
  image: string,
  description: string
}

@Component({
  selector: 'app-dashboard-component',
  imports: [SidebarComponent, ButtonModule, CommonModule, ChartModule, WeightChartComponent, VolumeChartComponent, SetsChartComponent, SelectPeriodeBarComponent, LastActivityComponent],
  templateUrl: './dashboard-component.component.html',
  styleUrl: './dashboard-component.component.scss'
})
export class DashboardComponent{

  currentDiv: string = 'div1'; // Startwert
  userName: string = 'Max Mustermann';

  //chartsData: Observable<chartData[]> = of([]);
  chartsData: Array<chartData> = [];


  async ngOnInit() {
    this.chartsData = this.getChartsData();
  }

  getChartsData(): chartData[] {
    // Replace 'your-api-endpoint-url' with the actual API endpoint if needed
    return [
      {
        header: 'Nächstes Training',
        image: './hantel-2.png',
        description: 'Ganzkörpertraining'
      },
      {
        header: 'Letztes Training',
        image: './hantel-2.png',
        description: 'Ganzkörpertraining'
      },
      {
        header: 'Trainingsdauer',
        image: './repeat.png',
        description: 'Durchschnittlich X min'
      },
      {
        header: 'Puls',
        image: './cardiogram.png',
        description: 'Durchnittlich X bpm'
      }
    ];
  }
}
