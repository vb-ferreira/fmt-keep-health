
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { BrowserStorageService } from '../../services/browser-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const browserStorageService = inject(BrowserStorageService); 

  const hasUser = !!browserStorageService.get('loggedUser');

  if (hasUser) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
