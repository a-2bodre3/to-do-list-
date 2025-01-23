import {Component, EventEmitter, inject, Input, Output,} from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredData = '';
  private taskserver = inject(TasksService);

  onCancel() {
    this.close.emit();
  }
  onSubmit(){
    this.taskserver.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date:this.enteredData
    },this.userId)
    this.close.emit();
  }
}
