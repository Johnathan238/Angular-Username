import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  userName = ''
  userId  = 0
  userStatus = 'offline'

  userCreationStatus = "No user was created!"

  updateUserName() {
    this.userName
  }

  onCreateUser() {
    setTimeout(() => {
      this.userCreationStatus = `${this.userName} was added !`
      console.log(this.userName);
    }, 1000)
  }

  onUpdateUserName(event: any) {
    this.userName = event.target.value
  }

  handleClear(event: any){
  event.preventDefault();

      this.userName = ''
      console.log(this.userName);
  }

  // handleClear(){
  //   setTimeout(() => {
  //     this.userName = ''
  //     console.log(this.userName);
  //   }, 4000)
  // }

  constructor() {
  }

  ngOnInit(): void {

  }

}
