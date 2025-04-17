import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { Equipment } from '../../../models/equipment.model';

@Component({
  selector: 'req-exquipment',
  imports: [FormsModule, ListboxModule],
  standalone: true,
  templateUrl: './req-exquipment.component.html',
  styleUrl: './req-exquipment.component.scss'
})
export class ReqExquipmentComponent implements OnInit {
  equipmentList!: Equipment[];
  selectedEquipment!: Equipment;

  ngOnInit(){
    this.equipmentList = [
      { name: 'Langhantel' },
      { name: 'Kurzhantel' },
      { name: 'Kettlebell' },
      { name: 'Kabelzug' },
      { name: 'Maschine' },
      { name: 'Körpergewicht' },
      { name: 'Band' },
      { name: 'Ball' },
      { name: 'Sonstiges' }
    ];
    this.selectedEquipment = { name: '' };
  }

  clear() {
    this.selectedEquipment = { name: '' };
  }
  ready(): boolean {
    return this.selectedEquipment?.name !== '';
  }
  getSelectedEquipment(): string {
    return this.selectedEquipment?.name;
  }
}
