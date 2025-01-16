import {newTaskData} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
  Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
      this.Tasks=JSON.parse(tasks);
    }
  }

  getUserTask(userID: string){
    return this.Tasks.filter((task) => task.userId === userID);
  }
  addTask(TaskData:newTaskData,userId:string){
    this.Tasks.unshift({
      id: new Date().getTime().toString(),
      userId:userId,
      title: TaskData.title,
      summary:TaskData.summary,
      dueDate:TaskData.date
    })
    this.savaTasks()
  }
  removeTask(id:string){
    this.Tasks = this.Tasks.filter((task) => task.id !== id);
    this.savaTasks()
  }
  private savaTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }
}
