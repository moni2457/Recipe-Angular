import { Component, EventEmitter, Output} from '@angular/core';
import { ChangeMade } from '../shared/services/changeMade.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [ChangeMade]
  })
  export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    constructor(private changeMade: ChangeMade) {

    }
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
        this.changeMade.changeMade();
    }
  
  }