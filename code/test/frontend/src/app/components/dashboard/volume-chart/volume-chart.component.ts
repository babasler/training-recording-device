import { ButtonModule } from 'primeng/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'volume-chart',
  imports: [ButtonModule, CommonModule, ChartModule],
  templateUrl: './volume-chart.component.html',
  styleUrl: './volume-chart.component.scss'
})
export class VolumeChartComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initChart();
  }

  private initChart(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.data = this.createChartData(documentStyle);
    this.options = this.createChartOptions(textColor, textColorSecondary, surfaceBorder);

    this.cd.markForCheck();
  }

  private createChartData(documentStyle: CSSStyleDeclaration): any {
    return {
      labels: ['01.01', '02.01', '03.01', '04.01', '05.01', '06.01', '07.01'],
      datasets: [
        {
          label: 'Gewicht',
          data: [1000, 0, 1100, 0, 1200, 0, 1300],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--p-purple-500'),
          tension: 0.4,
        }
      ]
    };
  }

  private createChartOptions(textColor: string, textColorSecondary: string, surfaceBorder: string): any {
    return {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

}
