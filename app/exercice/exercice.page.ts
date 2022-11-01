import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.page.html',
  styleUrls: ['./exercice.page.scss'],
})
export class ExercicePage implements OnInit {
  public type:string = '';
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.type = this.userService.getData('type')
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
  redirectTo(type:string){

  }
}
