import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  badUserNamePass: boolean;

  constructor(private router: Router, private userService: UserService) {
    this.badUserNamePass = false;
  }


  login(username, password) {

    this.userService
      .login(username, password)
      .then((obj) => {
        if (obj.status === 'success') {

          this.router.navigate(['/home/list']);

        } else if (obj.status === 'user does not exists') {
          this.badUserNamePass = true;
        }
      });
  }

  ngOnInit() {
  }
}
