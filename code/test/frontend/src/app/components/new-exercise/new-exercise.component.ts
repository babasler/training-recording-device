import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MuscleSelectorComponent } from "./muscle-selector/muscle-selector.component";
import { ExerciseNameComponent } from "./exercise-name/exercise-name.component";
import { ReqExquipmentComponent } from "./req-equipment/req-exquipment.component";

@Component({
  selector: 'app-new-exercise',
  imports: [SidebarComponent, InputTextModule, FormsModule, ButtonModule, MuscleSelectorComponent, ExerciseNameComponent, ReqExquipmentComponent],
  standalone: true,
  templateUrl: './new-exercise.component.html',
  styleUrl: './new-exercise.component.scss'
})
export class NewExerciseComponent {
  @ViewChild('exerciseRef') exerciseNameComponent!: ExerciseNameComponent;
  @ViewChild('muscleRef') muscleSelectorComponent!: MuscleSelectorComponent;
  @ViewChild('equipmentRef') reqExquipmentComponent!: ReqExquipmentComponent;

  
  isDisabled: boolean = true;

  constructor() {
    
  }

  clearAll() {
    this.muscleSelectorComponent?.clear();
    this.exerciseNameComponent?.clear();
    this.reqExquipmentComponent?.clear();
  }

  canSave(): boolean{
    return this.exerciseNameComponent?.ready() && this.muscleSelectorComponent?.ready() && this.reqExquipmentComponent?.ready();
  }
}
