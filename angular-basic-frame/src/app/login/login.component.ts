import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBlobService } from '../share/services/get-blob.service';

@Component({
  selector: 'benniao-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  passWord: string = "";
  userNameInput: boolean = true;
  passWordInput: boolean = false;

  constructor(
    private router: Router,
    private getBlobService: GetBlobService,
  ) { }

  ngOnInit() {

  }

  login() {
    if(!this.userName) {
      this.userNameInput = true;
      return;
    }else if(!this.passWord) {
      this.passWordInput = true;
      return;
    }
    this.router.navigateByUrl('Home');
  }

  download() {
    this.getBlobService.getBlobData().then((res) => {
      console.log(res);
    })
  }

}
