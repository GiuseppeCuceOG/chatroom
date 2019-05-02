import { Component, OnInit, Inject} from '@angular/core';
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

  constructor(
    private messService: MessagesService,
    private ff: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
    this.createForm();
  }

  ngOnInit() {
  	this.messService.getMessages()
  		.subscribe((mess) => this.messages = mess);
  }

  createForm() {
    this.messageForm = this.ff.group(
      {
        name: [''],
        message: [''],     
      }
    );
  }

  insertNickname(event) {
    event.preventDefault()
    const target = event.target;
    let nickname = target.querySelector('#nickname').value;
    this.user = nickname;
    this.nameInserted = true;
  }

  insertMessage() {

    this.text = this.messageForm.value;
    this.messService.putMessage(this.text)
      .subscribe((txt) => {
        this.text = txt;
        this.textcopy = txt;
      });
  }
}
