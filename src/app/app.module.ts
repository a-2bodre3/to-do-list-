import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "./shared/shared.module";
import {TaskModule} from "./tasks/tasks.module";
import {UserComponent} from "./user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports:[BrowserModule,FormsModule,SharedModule,TaskModule]
})
export class AppModule {}
