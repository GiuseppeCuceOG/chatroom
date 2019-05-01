import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.component.html',
  styleUrls: ['./inputpage.component.scss']
})
export class InputpageComponent implements OnInit {

  nameInserted = false;
  user: string = "";

  constructor() { }

  ngOnInit() {
  	console.log(this.nameInserted);
  }

  insertNickname(event) {
  	event.preventDefault()
  	const target = event.target;
  	let nickname = target.querySelector('#nickname').value;
  	this.user = nickname;
  	this.nameInserted = true;
  	console.log(nickname, this.nameInserted);
  }

}
