import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserStorageService } from '../services/browser-storage.service';
import { AddressService } from '../services/address.service';
import { ToMetersPipe } from '../pipes/to-meters.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ToMetersPipe, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // Fix localStorage
  browserStorageService: BrowserStorageService;
  userString: string = '';
  loggedUser: any;
  address: any;
  inputCep: string = '';
  hasAddress: boolean = false;
  
  constructor(browserStorageService: BrowserStorageService, private addressService: AddressService) {
    this.browserStorageService = browserStorageService;
  }

  ngOnInit() {
    this.userString = this.browserStorageService.get('loggedUser')!;
    this.loggedUser = JSON.parse(this.userString);
  }

  // TODO: capturar o CEP do template?
  searchCEP() {
    this.addressService.getAddress(this.inputCep).subscribe(
      {
        next: (response) => {
          this.address = response;
          this.hasAddress = true;
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }   
}
