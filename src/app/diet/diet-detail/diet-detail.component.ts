import { Component, Input, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BrowserStorageService } from '../../services/browser-storage.service';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diet-detail.component.html', 
  styleUrl: './diet-detail.component.scss'
})
export class DietDetailComponent {
  browserStorageService: BrowserStorageService;
  diets: any[] = [];
  selected: any = '';
  dietsString: string = '';
  
  route: ActivatedRoute = inject(ActivatedRoute);
  dietId = -1;

  constructor(browserStorageService: BrowserStorageService, private activeRoute: ActivatedRoute, private location: Location) {
    this.browserStorageService = browserStorageService;
    this.dietsString = this.browserStorageService.get('diets')!;
    this.diets = Array.from(JSON.parse(this.dietsString));
    this.dietId = Number(this.route.snapshot.params['id']);

    activeRoute.params.subscribe((param: any) =>{
      this.selected = this.diets.find(diet => diet.id == param.id);
    });

  }

  goBack() {
    this.location.back();
  }
}
