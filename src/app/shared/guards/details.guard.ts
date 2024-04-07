import { Router, ActivatedRouteSnapshot, CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { BrowserStorageService } from '../../services/browser-storage.service';

export const detailsGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const browserStorageService = inject(BrowserStorageService);
  const id = childRoute.params['id'];
  const hasUser = !!browserStorageService.get('loggedUser');
  
  if(!hasUser) {
    router.navigate(["/login"]);
    return false;
  } else {
    let diets: any = browserStorageService.get("diets");
    if (!!diets) {
      diets = JSON.parse(diets);
    } else {
      diets = [];
    }
    if (diets.find((diet: { id: number; }) => diet.id === Number(childRoute.params["id"]))) {
      return true;
    }
    router.navigate([""]);
    return false;
  }
  
  return true;
};
