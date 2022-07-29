import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  userName: string = ''
  userId: number = 0
  userStatus: string = 'offline'


  allowNewUser = false
  // userCreationStatus = "No user was created!"
  // serverName = ''

  updateUserName() {
    this.userName
    // this.userId
  }

    // onCreateUser() {
  //   this.serverCreationStatus = 'Server was created'
  // }



  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true
  //   }, 2000)
  //  }

  // ngOnInit(): void {
  // }

  // onCreateServer() {
  //   this.serverCreationStatus = 'Server was created'
  // }

  // onUpdateServerName(event: any) {
  //   this.serverName = event.target.value
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
