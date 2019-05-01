import { Component, OnInit, Inject } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Message } from '../shared/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.component.html',
  styleUrls: ['./inputpage.component.scss']
})
export class InputpageComponent implements OnInit {

  nameInserted = false;
  user: string;
  text: Message;
  textcopy: Message;
  messageForm: FormGroup;

  constructor(
    private messService: MessagesService,
    private ff: FormBuilder,
    @Inject('BaseURL') private BaseURL) { 
    this.createForm();
  }

  ngOnInit() {
  	
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
