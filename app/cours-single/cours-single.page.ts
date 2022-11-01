import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cours-single',
  templateUrl: './cours-single.page.html',
  styleUrls: ['./cours-single.page.scss'],
})
export class CoursSinglePage implements OnInit {
  constructor(private firebaseService: FirebaseService,
    private userService: UserService) { }
  public datas: any[] = [];
  public dataSource: any;
  navbarClass!: string;
  public disp: string = 'hide'
  public type: string
  public augment: number
  public regresse: number
  public chapitre: string
  public cour:any
  ngOnInit() {

    this.type = this.userService.getData('type')
    // this.chapitre =this.userService.getData(this.chapitre)
    this.firebaseService.getCoursChapitre(this.type).subscribe(
      (res: any) => (this.datas = res, console.log(this.datas))
    )
    this.firebaseService.getCoursChapitre(this.chapitre).subscribe(
      (res: any) => {
        console.log('toto')
        console.log(res)
        this.chapitre = res
      }
    )
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  next(num: number) {
    if (num >= 1 && (num < 13)) {
      num += 1
      this.type = num.toString();
      this.firebaseService.getCoursChapitre(this.type).subscribe(
        (res: any) => (this.datas = res)
      )
    }

  }
  back(num: number) {
    if ((num <= 13) && (num > 1)) {
      num -= 1
      this.type = num.toString();
      this.firebaseService.getCoursChapitre(this.type).subscribe(
        (res: any) => (this.datas = res)
      )
    }
  }
  play(text:string){
    // this.tts.speak(text).then(
    //   ()=>console.log('Cool')).catch(
    //     (reason:any)=>console.log(reason)
    //   )
  }

}
