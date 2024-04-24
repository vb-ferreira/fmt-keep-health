import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserStorageService } from '../services/browser-storage.service';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, SharedModule, ButtonModule, DialogModule, InputTextModule, DropdownModule, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  browserStorageService = inject(BrowserStorageService); 

  visible: boolean = false;
  loggedUser: any = '';
  atividades: any = '';  
  activities: any = '';
  selectedActivitie: any = '';

  atividadeModel = {
    act: '',
    data: '',
  }
  
  ngOnInit() {
    this.loggedUser = this.browserStorageService.get('loggedUser');
    this.loggedUser = JSON.parse(this.loggedUser);
    this.atividades = this.browserStorageService.get('atividades');
    this.atividades = JSON.parse(this.atividades);
  
    this.activities = [
      { title: 'Corrida', url: 'assets/running.png' },
      { title: 'Futebol', url: 'assets/soccer.png' },
      { title: 'Vôlei', url: 'assets/volei.png' }
    ];
  }

  onRegister() {
    // Validação
    const hasEmpty = !Object.values(this.atividadeModel).every(x => x !== null && x !== '');
    if (hasEmpty) {
      return alert('Todos os campos precisam ser preenchidos.');
    }

    const actLocal = localStorage.getItem('atividades');

    if (actLocal != null) {
      const newActivities = JSON.parse(actLocal);
      newActivities.push(this.atividadeModel);
      localStorage.setItem('atividades', JSON.stringify(newActivities));
    } else {
      const newActivities = [];
      newActivities.push(this.atividadeModel);
      localStorage.setItem('atividades', JSON.stringify(newActivities));
    }
    
    alert('Atividade cadastrada com sucesso.');
    window.location.reload();

  }
  
  showDialog() {
    this.visible = true;
  }
  
}
