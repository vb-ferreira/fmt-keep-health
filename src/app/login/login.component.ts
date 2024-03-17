import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginModel = {
    email: '',
    password: ''
  }

  constructor(private router: Router){};

  onLogin() {
    const localUsers = localStorage.getItem('keepHealthUsers');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);
      const actualUser = users.find(
        (user: { email: string, password: string; }) => user.email === this.loginModel.email &&
        user.password === this.loginModel.password
        );
      if (actualUser != undefined) {
        localStorage.setItem('loggedUser', JSON.stringify(actualUser));
        this.router.navigateByUrl('/home');
      } else {
        alert('Credenciais inválidas.');
      }
    }
  }

  onRemember() {
    
  }
}
