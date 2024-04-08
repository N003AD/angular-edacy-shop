import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resuable-buttons',
  templateUrl: './resuable-buttons.component.html',
  styleUrl: './resuable-buttons.component.css'
})
export class ResuableButtonsComponent {
  // Le composant pére va lui donner un type
//  @Input() type!: 'principal' | 'secondaire';
 @Input() isPrincipal!: boolean;
 @Input() isSecondary!: boolean;
  @Output() buttonClicked: (EventEmitter<any>) = new EventEmitter();

  clicked(){
    this.buttonClicked.emit();
    }
}
