import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ChangeMade } from 'src/components/shared/services/changeMade.service';
import { ReceipesServices } from '../receipes.services';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
  providers: [ChangeMade]
})
export class ReceipeItemComponent implements OnInit {

  @Input() rec:  Receipe;
  @Input() index: number;
  constructor(private changeMade: ChangeMade, 
    private receipesServices: ReceipesServices) { 
  }

  ngOnInit(): void {
  }

}
