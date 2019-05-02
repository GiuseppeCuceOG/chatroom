import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Message } from '../shared/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  
  messages: Message[];
  nameInserted = false;
  user;
  text: Message;
  textcopy: Message;
  messageForm: FormGroup;
  messIds: string[];
  @ViewChild('fform') realTimeMessageFormDirective;

  realTimeMess = {
    message: ''
  };

  constructor(
    private messService: MessagesService,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
    this.createForm();
  }

  ngOnInit() {
  	this.messService.getMessages()
  		.subscribe((mess) => this.messages = mess);
  }

  createForm() {
    this.messageForm = this.fb.group(
      {
        message: [''],     
      }
    );
  }

  insertNickname(event) {
    const target = event.target;
    let nickname = target.querySelector('#nickname').value;
    this.user = nickname;
    this.nameInserted = true;
  }

  insertMessage() {

    this.text = this.messageForm.value;
    this.text.name = this.user;
    this.messService.putMessage(this.text)
      .subscribe((txt) => {
        this.text = txt;
        this.textcopy = txt;
      });
    this.realTimeMessageFormDirective.resetForm(); 
  }
}
