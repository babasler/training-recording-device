import { Component } from '@angular/core';

@Component({
  selector: 'muscle-selector',
  imports: [],
  templateUrl: './muscle-selector.component.html',
  styleUrl: './muscle-selector.component.scss'
})
export class MuscleSelectorComponent {

  ngOnInit(): void {
    const groups: NodeListOf<SVGGElement> = document.querySelectorAll(".muscle-groups svg g g[id]");
    groups.forEach(function(group) {
      // For the hover
      group.addEventListener('mouseover', function(el: MouseEvent) {
        let id = (el.target as SVGElement).id.toLowerCase();
        if (!id) id = (el.target as SVGElement).parentElement?.id.toLowerCase() || '';
        let label = document.querySelector(`label[for="${id}"]`) as HTMLLabelElement;
        if (label.classList)
          label.classList.add("hover");
        else
          label.className += ' ' + "hover";
      });
      group.addEventListener('mouseout', function(el: MouseEvent) {
        let id = (el.target as SVGElement).id.toLowerCase();
        if (!id) id = (el.target as SVGElement).parentElement?.id.toLowerCase() || '';
        let label = document.querySelector(`label[for="${id}"]`) as HTMLLabelElement;
        let clss = "hover";
        if (label.classList)
          label.classList.remove(clss);
        else
          label.className = label.className.replace(new RegExp('(^|\\b)' + clss.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      });
      // For the click
      group.addEventListener('click', function(el: MouseEvent) {
        let id = (el.target as SVGElement).id.toLowerCase();
        if (!id) id = (el.target as SVGElement).parentElement?.id.toLowerCase() || '';
        let input = document.getElementById(id) as HTMLInputElement;
         if (input.checked) input.checked = false;
        else input.checked = true;
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
      if ((checkbox as HTMLInputElement).checked) {
        checked = true;
      }
    });
    return checked;
  }

  getMuscles(): string[] {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let muscles: string[] = [];
    checkboxes.forEach((checkbox) => {
      if ((checkbox as HTMLInputElement).checked) {
        muscles.push((checkbox as HTMLInputElement).id);
      }
    });
    return muscles;
  }
}
