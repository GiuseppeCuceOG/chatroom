import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { InputpageComponent } from './inputpage/inputpage.component';
import { RoomComponent } from './room/room.component';

import { MessagesService } from './services/messages.service';

import { baseURL } from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    InputpageComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    MessagesService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
