import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Message } from '../shared/message';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
  	return this.http.get<Message[]>(baseURL + 'chat');
  }

  getIdsMess(): Observable<string[] | any> {
  	  	return this.getMessages()
      .pipe(map(messages => messages.map(mess => mess.id)))
  }  

  putMessage(mess: Message): Observable<Message> {
  	const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  	return this.http.post<Message>(baseURL + 'chat/', mess, httpOptions);
  }
}
