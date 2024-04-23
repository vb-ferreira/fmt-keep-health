import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserStorageService } from '../services/browser-storage.service';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, SharedModule, ButtonModule, DialogModule, InputTextModule, DropdownModule],
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
      { title: 'Corrida', url: 'https://www.freepik.com/icon/running_763965#fromView=search&page=1&position=3&uuid=21cac139-98b9-43ea-8fe9-bc5a9b0907fa' },
      { title: 'Futebol', url: 'url2https://www.freepik.com/icon/football_94183#fromView=search&page=1&position=5&uuid=21cac139-98b9-43ea-8fe9-bc5a9b0907fa' },
      { title: 'Vôlei', url: 'https://www.freepik.com/icon/volleyball_7349793#fromView=search&page=3&position=6&uuid=21cac139-98b9-43ea-8fe9-bc5a9b0907fa' }
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

  }
  
  showDialog() {
    this.visible = true;
  }
  
}
