import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserStorageService } from '../services/browser-storage.service';
import { AddressService } from '../services/address.service';
import { ToMetersPipe } from '../pipes/to-meters.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ToMetersPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // Fix localStorage
  browserStorageService: BrowserStorageService;
  userString: string = '';
  loggedUser: any;
  address: any;
  
  constructor(browserStorageService: BrowserStorageService, private addressService: AddressService) {
    this.browserStorageService = browserStorageService;
  }

  ngOnInit() {
    this.userString = this.browserStorageService.get('loggedUser')!;
    this.loggedUser = JSON.parse(this.userString);
  }

  searchCEP() {
    this.addressService.getAddress(this.loggedUser?.cep).subscribe(
      {
        next: (response) => {
          this.address = response;
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }   
}
