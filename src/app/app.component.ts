import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomClassDirective } from './directives/custom-class.directive';
import { CustomForDirective } from './directives/custom-for.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { CustomModelDirective } from './directives/custom-model.directive';
import { CustomStyleDirective } from './directives/custom-style.directive';
import {
  CustomSwitchCaseDirective,
  CustomSwitchDirective,
} from './directives/custom-switch.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomIfDirective,
    CustomForDirective,
    CustomSwitchDirective,
    CustomSwitchCaseDirective,
    CustomClassDirective,
    CustomStyleDirective,
    CustomModelDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isVisible = true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  currentView = 'view1';
  isActive = true;
  textColor = 'blue';
  fontSize = '20px';
  userInput = 'Type something...';

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleView() {
    this.currentView = this.currentView === 'view1' ? 'view2' : 'view1';
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

  changeStyle() {
    this.textColor = this.textColor === 'blue' ? 'red' : 'blue';
    this.fontSize = this.fontSize === '20px' ? '25px' : '20px';
  }
}
