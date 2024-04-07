import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserStorageService } from '../services/browser-storage.service';
import { AddressService } from '../services/address.service';
import { ToMetersPipe } from '../pipes/to-meters.pipe';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ToMetersPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  browserStorageService: BrowserStorageService;
  userString: string = '';
  loggedUser: any;
  address: any;
  hasAddress: boolean = false;

  form = new FormGroup({
    userCEP: new FormControl('', [Validators.minLength(8), Validators.maxLength(8), Validators.required])
  });
  
  constructor(browserStorageService: BrowserStorageService, private addressService: AddressService) {
    this.browserStorageService = browserStorageService;
  }

  ngOnInit() {
    this.userString = this.browserStorageService.get('loggedUser')!;
    this.loggedUser = JSON.parse(this.userString);
  }

  searchCEP() {
    this.addressService.getAddress(this.form.value.userCEP).subscribe(
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
