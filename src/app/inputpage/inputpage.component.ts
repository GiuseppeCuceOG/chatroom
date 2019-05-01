import { Component, OnInit, Inject } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Message } from '../shared/message';

@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.component.html',
  styleUrls: ['./inputpage.component.scss']
})
export class InputpageComponent implements OnInit {

  nameInserted = false;
  user: string;
  text: string;
  message;

  constructor(private messService: MessagesService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	
  }

  insertNickname(event) {
  	event.preventDefault()
  	const target = event.target;
  	let nickname = target.querySelector('#nickname').value;
  	this.user = nickname;
  	this.nameInserted = true;
  	console.log(nickname, this.nameInserted);
  }

  insertMessage(event) {
    event.preventDefault()
    const target = event.target;
    let mess = target.querySelector('#text').value;
    this.text = mess;
    this.message = this.user + ' ' + this.text;
    this.messService.putMessage(this.message)
      .subscribe((mess) => {this.message = mess});
    console.log(this.message);
  }

}
