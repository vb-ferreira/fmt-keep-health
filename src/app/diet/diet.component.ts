import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserStorageService } from '../services/browser-storage.service';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {
  // Fix localStorage
  browserStorageService: BrowserStorageService;
  dietsString: string = '';
  diets: any = '';

  constructor(browserStorageService: BrowserStorageService) {
    this.browserStorageService = browserStorageService;
  }

  ngOnInit() {
    this.dietsString = this.browserStorageService.get('diets')!;
    this.diets = Array.from(JSON.parse(this.dietsString));
    console.log(typeof this.diets);
  }
}
