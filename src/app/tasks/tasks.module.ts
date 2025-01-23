import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {TaskComponent} from "./task/task.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {TasksComponent} from "./tasks.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent,
    TasksComponent
  ],
  exports:[TasksComponent],
  imports:[CommonModule,FormsModule,SharedModule]
})
export class TaskModule {}
