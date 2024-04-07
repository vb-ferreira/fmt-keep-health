import { Component } from '@angular/core';
import { BrowserStorageService } from '../services/browser-storage.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  browserStorageService: BrowserStorageService;  
  
  constructor(browserStorageService: BrowserStorageService) {
    this.browserStorageService = browserStorageService;
  }

  loggedUser: any = ''

  ngOnInit() {
    this.loggedUser = this.browserStorageService.get('loggedUser');
    this.loggedUser = JSON.parse(this.loggedUser);
  }
}
