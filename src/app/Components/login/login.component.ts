import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../side-bar/login.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private log: LoginService
  ) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
  });

  login() {
    const { username, password } = this.loginForm.value;

    // if (userName==='admin' && password=='admin') {
    // this._router.navigate(['/dashboard'])
    // }else{
    //   alert('wrong userName or password')
    // }
console.log(username,password)
    this.log.login(username, password).subscribe({
      next:()=>{this._router.navigate(['/dashboard'])},
      error:error=>{console.log(error)}
    })
  }
}
