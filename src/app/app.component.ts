import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spinner';
  showButton:boolean = false;
  btnAdd = [];
  btnCount:number = 0
  navigationComponent:string = 'recipe';

  buttonClick() {
    this.showButton = !this.showButton;
    this.btnCount++;
    this.btnAdd.push(this.btnCount);
  }

  onFeatureSelected(data: string) {
    this.navigationComponent = data;
  }
}
