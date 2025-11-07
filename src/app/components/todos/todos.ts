import { Component, inject, Input, EventEmitter, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos {
   newTask: string = '';
  tasks: string[] = [];

   // constructor(private todoService: TodoService) { }  1 варіант акттивації сервісу 

  constructor() { } // 2 варіант активації сервісу

  private todoService =inject(TodoService);
  
  ngOnInit() {
    this.tasks = this.todoService.getTasks();
  }
  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
      this.updateTasks();
    }
  }

  removeTask(index: number) {
    this.todoService.removeTask(index);
    this.updateTasks();
  }

  private updateTasks() { 
    this.tasks = this.todoService.getTasks();
  }

}
