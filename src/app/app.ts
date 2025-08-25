import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Test} from './components/test/test/test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-using-examples');

  messageFromParent: string = 'Я твій батько';
  messageFromChild: string = '';
newTask: any;

  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
  
}