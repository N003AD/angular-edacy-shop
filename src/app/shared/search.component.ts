import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
  <div style="margin-left: 7px;">
      <input type="text" [placeholder]="placeholderMessage" (keyup)="searchChanged($event)" name="search" id="">
  </div>`,
  styles: [``]
})
export class SearchComponent implements OnInit {
  // Il écoute un message du parent placeholder
  @Input() placeholderMessage!: string;
  @Output() searched : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  searchChanged(ev:any) {
    // console.log(ev.target.value);
    const text: string = ev.target.value;
    // On va utiliser cette évent émetteur (searched) pour qu'il transfert le message
    // On vient de lier notre input à notre composant parent
    this.searched.emit(text);
   }
}
