import { Component } from '@angular/core';

@Component({
  selector: 'muscle-selector',
  imports: [],
  templateUrl: './muscle-selector.component.html',
  styleUrl: './muscle-selector.component.scss'
})
export class MuscleSelectorComponent {

  ngOnInit() {
    const groups = document.querySelectorAll(".muscle-groups svg g g[id]");
  
    groups.forEach(function(group) {
  
      // Mouseover: Label hervorheben
      group.addEventListener("mouseover", function(el) {
        let id = (el.target as HTMLElement)?.id?.toLowerCase();
  
        // Falls kein ID vorhanden, versuch es mit dem Parent
        if (!id) {
          id = (el.target as HTMLElement).parentElement?.id?.toLowerCase() || "";
        }
  
        const label = document.querySelector(`label[for="${id}"]`);
  
        if (label) {
          // Klasse "hover" hinzufügen
          if (label.classList) {
            label.classList.add("hover");
          } else {
            label.className += " hover";
          }
        }
      });
  
      // Mouseout: Hover-Klasse entfernen
      group.addEventListener("mouseout", function(el) {
        let id = (el.target as HTMLElement)?.id?.toLowerCase();
  
        // Falls kein ID vorhanden, versuch es mit dem Parent
        if (!id) {
          id = (el.target as HTMLElement).parentElement?.id?.toLowerCase() || "";
        }
  
        const label = document.querySelector(`label[for="${id}"]`);
        const clss = "hover";
  
        if (label) {
          if (label.classList) {
            label.classList.remove(clss);
          } else {
            // Klassisch mit Regex ersetzen
            label.className = label.className.replace(
              new RegExp("(^|\\b)" + clss.split(" ").join("|") + "(\\b|$)", "gi"),
              " "
            ).trim();
          }
        }
      });
  
    });
  }
  

  clear() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }

  ready(): boolean {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checked = false;
    checkboxes.forEach((checkbox) => {
      if((checkbox as HTMLInputElement).checked) {
        checked = true;
      }
    });
    return checked;
  }
  

  getSelectedMuscles(): string[] {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"].muscles-helper');
    const muscles: string[] = [];
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        muscles.push(checkbox.id);
      }
    });
    return muscles;
  }
  
}
