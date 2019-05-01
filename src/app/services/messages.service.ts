import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Message } from '../shared/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
  	return this.http.get<Message[]>(baseURL + 'chat');
  }

  putMessage(mess: Message): Observable<Message> {
  	const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  	return this.http.put<Message>(baseURL + 'chat/', mess, httpOptions);
  }
}
