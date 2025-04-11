import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MuscleSelectorComponent } from "./muscle-selector/muscle-selector.component";

@Component({
  selector: 'app-new-exercise',
  imports: [SidebarComponent, InputTextModule, FormsModule, ButtonModule, MuscleSelectorComponent],
  standalone: true,
  templateUrl: './new-exercise.component.html',
  styleUrl: './new-exercise.component.scss'
})
export class NewExerciseComponent {
  value: string | undefined;
  isDisabled: boolean = true;

  deleteMuscleSelection() {
    MuscleSelectorComponent.clearSelection();
  }
}
