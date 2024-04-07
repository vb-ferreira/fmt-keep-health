
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 

  const hasUser = !!localStorage.getItem('loggedUser');

  if (hasUser) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
