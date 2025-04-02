import { ButtonModule } from 'primeng/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'sets-chart',
  imports: [ButtonModule, CommonModule, ChartModule],
  templateUrl: './sets-chart.component.html',
  styleUrl: './sets-chart.component.scss'
})
export class SetsChartComponent implements OnInit {
  data: any;
  options: any;
  private platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initChart();
  }

  private initChart(): void {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      this.data = this.getChartData(documentStyle);
      this.options = this.getChartOptions(documentStyle);
      this.cd.markForCheck();
    }
  }

  private getChartData(documentStyle: CSSStyleDeclaration): any {
    return {
      labels: ['01.01', '02.01', '03.01', '04.01', '05.01', '06.01', '07.01'],
      datasets: [
        {
          type: 'bar',
          label: 'Sätze',
          backgroundColor: documentStyle.getPropertyValue('--p-purple-500'),
          data: [50, 25, 12, 48, 90, 76, 42]
        }
      ]
    };
  }

  private getChartOptions(documentStyle: CSSStyleDeclaration): any {
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          stacked: true,
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
