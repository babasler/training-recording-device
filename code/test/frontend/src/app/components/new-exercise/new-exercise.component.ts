import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MuscleSelectorComponent } from "./muscle-selector/muscle-selector.component";
import { ExerciseNameComponent } from "./exercise-name/exercise-name.component";
import { ReqExquipmentComponent } from "./req-equipment/req-exquipment.component";
import { Equipment } from '../../models/equipment.model';

@Component({
  selector: 'app-new-exercise',
  imports: [SidebarComponent, InputTextModule, FormsModule, ButtonModule, MuscleSelectorComponent, ExerciseNameComponent, ReqExquipmentComponent],
  standalone: true,
  templateUrl: './new-exercise.component.html',
  styleUrl: './new-exercise.component.scss'
})
export class NewExerciseComponent {
saveExercise(arg0: string,arg1: any, selectedEquipment: string) {
throw new Error('Method not implemented.');
//rest call to save exercise
}
  @ViewChild('exerciseRef') exerciseNameComponent!: ExerciseNameComponent;
  @ViewChild('muscleSelectorRef') muscleSelectorComponent!: MuscleSelectorComponent;
  @ViewChild('equipmentRef') reqEquipmentComponent!: ReqExquipmentComponent;

  clearAll() {
    this.muscleSelectorComponent?.clear();
    this.exerciseNameComponent?.clear();
    this.reqEquipmentComponent?.clear();
  }

  canSave(): boolean{
    let ready = this.exerciseNameComponent?.ready() && this.muscleSelectorComponent?.ready() && this.reqEquipmentComponent?.ready();
    console.log("Exercise Name Component: " + this.exerciseNameComponent?.ready());
    console.log("Muscle Selector Component: " + this.muscleSelectorComponent?.ready());
    console.log("Equipment Component: " + this.reqEquipmentComponent?.ready());
    console.log("Can Save: " + ready);
    return ready;
  }
}
