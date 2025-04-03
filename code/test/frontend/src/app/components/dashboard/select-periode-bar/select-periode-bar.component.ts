import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

interface Period {
  period: string;
}

@Component({
  selector: 'select-periode-bar',
  standalone: true,
  imports: [FormsModule, SelectModule, ButtonModule, CommonModule],
  templateUrl: './select-periode-bar.component.html',
  styleUrl: './select-periode-bar.component.scss'
})
export class SelectPeriodeBarComponent implements OnInit {
  periods: Period[] | undefined;

    selectedPeriod: Period | undefined;

    ngOnInit() {
        this.periods = [
            { period: '7 Tage' },
            { period: '30 Tage'},
            { period: '90 Tage'},
            { period: '1 Jahr' },
        ];
    }

}
