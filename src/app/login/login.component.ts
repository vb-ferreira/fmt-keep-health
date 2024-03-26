import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(private router: Router) {}

  onLogin() {
    // Validação
    const hasEmpty = !Object.values(this.loginModel).every(x => x !== null && x !== '');
    if (hasEmpty) {
      return alert('Preencha todos os campos.');
    }

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
        alert('Usuário ou senha inválidos.');
      }
    } else {
      alert('Primeira vez aqui? Faça seu cadastro!');
    }
  } 

  onRemember() {
    // Validação
    if (this.loginModel.email == null || 
       (typeof this.loginModel.email === "string" && 
       this.loginModel.email.trim().length === 0)) {
       return alert('Informe o email do usuário.');
    };

    const localUsers = localStorage.getItem('keepHealthUsers');
    
    if (localUsers != null) {
      const users = JSON.parse(localUsers);
      const actualUser = users.find(
        (user: { email: string }) => user.email === this.loginModel.email
        );
      if (actualUser != undefined) {
        const index = users.findIndex((item: { email: string } ) => item.email === actualUser.email);
        users[index] = Object.assign({}, users[index], { password: 'a1b2c4d4'});
        localStorage.setItem('keepHealthUsers', JSON.stringify(users));
        alert('Tente logar novamente com a senha: a1b2c4d4');
      } else {
        alert('Usuário não encontrado.');
      }
    } else {
      alert('Primeira vez aqui? Faça seu cadastro!');
    }
  }
}
