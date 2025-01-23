import { Component, Input } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {newTaskData} from "./task/task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!:string;
  @Input({required:true}) name !:string;
  isAddingTask:boolean = false;

  constructor(private taskService:TasksService) {
  }

  get selectedUserTask() {
    return this.taskService.getUserTask(this.userId)
  }
  onCompleteTask(id:string) {

  }
  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
