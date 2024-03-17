import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroModel = {
    nome: '',
    email: '',
    dataNascimento: '',
    password: ''
  }

  confirmPassword = ''

  constructor(private router: Router){};

  onSignUp() {
    // Validação
    const hasEmpty = !Object.values(this.cadastroModel).some(x => x !== null && x !== '');
    if (hasEmpty || (this.cadastroModel.password != this.confirmPassword)) {
      alert('Todos os campos precisam ser preenchidos corretamente.');
      return;
    }

    const localUser = localStorage.getItem('keepHealthUsers');

    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.cadastroModel);
      localStorage.setItem('keepHealthUsers', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.cadastroModel);
      localStorage.setItem('keepHealthUsers', JSON.stringify(users));
    }

    alert('Usuário cadastrado com sucesso.');
    this.router.navigateByUrl('/login');
  }
}
