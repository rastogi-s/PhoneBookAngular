import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  verifyPassword: string;
  usernameExists: boolean;
  successMsg: boolean;

  constructor(private router: Router,
              private service: UserService) {
    this.usernameExists = false;
    this.successMsg = false;
  }

  ngOnInit() {
  }

  register() {
    this.service
      .register(this.user)
      .then((res) => {
        if (res != null) {
          this.successMsg = true;
        }
      });
  }
}
