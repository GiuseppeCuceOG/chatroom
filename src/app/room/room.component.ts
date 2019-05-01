import { Component, OnInit, Inject} from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Message } from '../shared/message';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  
  messages: Message[];

  constructor(private messService: MessagesService,
  	@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.messService.getMessages()
  		.subscribe((mess) => this.messages = mess);
  }

}
