import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../side-bar/login.service';

@Component({

  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private login:LoginService,private router:Router){}


logout(){
  this.login.logOut();
  this.router.navigate(['/login']);

}
}
