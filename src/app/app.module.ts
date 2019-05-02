import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RoomComponent } from './room/room.component';

import { MessagesService } from './services/messages.service';

import { baseURL } from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    MessagesService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
