import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'exercise-name',
  imports: [InputTextModule, FormsModule, CheckboxModule],
  templateUrl: './exercise-name.component.html',
  standalone: true,
  styleUrl: './exercise-name.component.scss'
})
export class ExerciseNameComponent {
  value: string;
  checked_bi: boolean;
  checked_un: boolean;
  disabled_bi: boolean;
  disabled_un: boolean;


 constructor() {
    this.value = '';
    this.checked_bi = false;
    this.checked_un = false;
    this.disabled_bi = false;
    this.disabled_un = false;
  }

  onUnClicked() {
    if (this.checked_un) {
      this.checked_bi = false;
      this.disabled_bi = true;
    } else {
      this.disabled_bi = false;
    }
  }
  
  onBiClicked() {
    if (this.checked_bi) {
      this.checked_un = false;
      this.disabled_un = true;
    } else {
      this.disabled_un = false;
    }
  }
  
  getExerciseName(): string {
    return this.value;
  }

  isUnilateral(): boolean {
    return this.checked_un;
  }
  isBilateral(): boolean {
    return this.checked_bi;
  }

  ready(): boolean {
    return this.value !== '' && (this.checked_bi || this.checked_un);
  }

  clear() {
    this.value = '';
    this.checked_bi = false;
    this.checked_un = false;
    this.disabled_bi = false;
    this.disabled_un = false;
  }
}
