import { SidebarComponent } from "../sidebar/sidebar.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { WeightChartComponent } from "./weight-chart/weight-chart.component";
import { VolumeChartComponent } from "./volume-chart/volume-chart.component";
import { SetsChartComponent } from "./sets-chart/sets-chart.component";
import { SelectPeriodeBarComponent } from "./select-periode-bar/select-periode-bar.component";
import { chartComponent } from "./chart/chart.component";

export interface chartData {
  header: string;
  description: string;

  setDescription: (description: string) => void;
}

@Component({
  selector: 'app-dashboard-component',
  imports: [SidebarComponent, ButtonModule, CommonModule, ChartModule, WeightChartComponent, VolumeChartComponent, SetsChartComponent, SelectPeriodeBarComponent, chartComponent],
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss'],
  standalone: true,
})
export class DashboardComponent{

  currentDiv: string = 'div1'; // Startwert

  lastTraining: chartData;
  nextTraining: chartData;
  trainingDuration: chartData;
  pulse: chartData;
  weight: chartData;


  constructor() {
    this.lastTraining = {
      header: 'Letztes Training',
      description: '',
  
      setDescription: (description: string) => { this.lastTraining.description = description; }
    };
    this.nextTraining = {
      header: 'Nächstes Training',
      description: '',
      setDescription: (description: string) => { this.nextTraining.description = description; }
    };
    this.trainingDuration = {
      header: 'Trainingsdauer',
      description: '',
      setDescription: (description: string) => { this.trainingDuration.description = description; }
    };
    this.pulse = {
      header: 'Puls',
      description: '',
      setDescription: (description: string) => { this.pulse.description = description; }
    };
    this.weight = {
      header: 'Aktuelles Gewicht',
      description: '',
      setDescription: (description: string) => { this.weight.description = description; }
    };
  }

  async ngOnInit() {
    // Hier mit Fetch Arbeiten
    this.lastTraining.setDescription('Test1');
    this.nextTraining.setDescription('Test2');
    this.trainingDuration.setDescription('Test3');
    this.pulse.setDescription('Test4');
    this.weight.setDescription('Test5');
  }

  setCurrentDiv(div: string) {
    this.currentDiv = div;
  }
  getCurrentDiv() {
    return this.currentDiv;
  }
}