import { Component,computed,EventEmitter,Input ,input, Output} from '@angular/core';

import {type User} from "./User.model";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //use input without signal
// @Input({required:true}) id!:string;
// @Input({required:true}) avatar!:string;
// @Input({required:true}) name !:string;
@Input({required:true}) user !:User
@Input({required:true}) selected!:boolean;
@Output() select = new EventEmitter();
get ImagePath() {
  return 'assets/users/' + this.user.avatar;
}
//use input with signal
// avatar=input.required<string>();
// name =input.required<string>();
// ImagePath =computed(()=>{
//   return 'assets/users/' + this.avatar()
// })

onSelectedUser() {
  this.select.emit(this.user.id);
}
}
