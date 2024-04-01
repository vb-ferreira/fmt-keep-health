import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserStorageService } from '../services/browser-storage.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {
  browserStorageService: BrowserStorageService;
  diets: any[] = [];
  filteredDiets: any[] = [];
  dietsString: string = '';

  constructor(browserStorageService: BrowserStorageService, private router: Router) {
    this.browserStorageService = browserStorageService;
    this.dietsString = this.browserStorageService.get('diets')!;
    this.diets = Array.from(JSON.parse(this.dietsString));
    this.filteredDiets = Array.from(JSON.parse(this.dietsString));
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredDiets = this.filteredDiets;
      return;
    }
  
    this.filteredDiets = this.filteredDiets.filter(
      diet => diet?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  goToDetail(name: string){
    this.router.navigate(["diet", name]);
  }

} 
