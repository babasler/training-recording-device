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
import { HttpClient } from "@angular/common/http";

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
  chartsData: Array<chartData> = [{
    header: 'Nächstes Training',
    image: './hantel-2.png',
    description: 'Ganzkörpertraining'
  },
  {
    header: '',
    image: '',
    description: ''
  },
  {
    header: '',
    image: '',
    description: ''
  },
  {
    header: '',
    image: '',
    description: ''
  },
  {
    header: ' ',
    image: '',
    description: ''
  },
];

  constructor(private http: HttpClient) { }


  async ngOnInit() {
    this.getChartsData();
  }

  async getChartsData(): Promise<void> {
    try {
      const data = await this.http.get<chartData[]>('http://backend:8084/data').toPromise();
      this.chartsData = data || [];
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}