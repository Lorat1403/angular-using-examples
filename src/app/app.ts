import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './components/test/test';
import {
  TestForm
} from './components/test-form/test-form';
import { RxjsTest } from './components/rxjs-test/rxjs-test';
import { RxjsSubject } from './components/rxjs-subject/rxjs-subject';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, TestForm, RxjsTest, RxjsSubject],
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