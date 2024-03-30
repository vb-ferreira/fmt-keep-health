import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BrowserStorageService } from '../services/browser-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
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
