import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserStorageService } from '../services/browser-storage.service';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, SharedModule, ButtonModule, DialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  browserStorageService = inject(BrowserStorageService); 
  
  visible: boolean = false;
  loggedUser: any = '';
  atividades: any = '';  
  
  
  ngOnInit() {
    this.loggedUser = this.browserStorageService.get('loggedUser');
    this.loggedUser = JSON.parse(this.loggedUser);
    this.atividades = this.browserStorageService.get('atividades');
    this.atividades = JSON.parse(this.atividades);
  }
  
  showDialog() {
    this.visible = true;
  }
  
}
