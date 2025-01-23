import {Component, EventEmitter, inject, Input, Output} from '@angular/core';

import {type task} from "./task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:task;
  private taskserver = inject(TasksService);
  onCompleteTask() {
    this.taskserver.removeTask(this.task.id)
  }
}
