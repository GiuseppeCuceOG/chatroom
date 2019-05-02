import { Component, OnInit, Inject} from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Message } from '../shared/message';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  messages: Message[];

  constructor(private messService: MessagesService,
  	@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.messService.getMessages()
  		.subscribe((mess) => this.messages = mess);
  }

}
