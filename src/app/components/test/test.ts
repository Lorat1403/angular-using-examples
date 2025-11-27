import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import{  CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { TodoService } from '../../services/todo-service';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { MatExpansionPanelTitle, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader } from "@angular/material/expansion";

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, HighlightDirective, TruncatePipe, MatExpansionPanelTitle, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

  title = 'This is interpolation';
  firstName = 'Mary';
  lastName = 'Smith';

   isEnabled: boolean = false; // example of handle btn"clickme"

  isActive: boolean = true;
  isDisabled: boolean = false;

  isClickedState: boolean = false; //example of color change field
  inputText: string = '';

  today = new Date();
  longText = 'Very long text, whih needs to be truncated. ';
  
  

  @Input() childMessage: string = '';
  @Output() messageFromChild = new EventEmitter<string>();

    getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
  
    toggleState() { 
    this.isClickedState = true;
  }
  
  sendMessageToParent() {
    this.messageFromChild.emit('Це відповідь сина');
  }

}
