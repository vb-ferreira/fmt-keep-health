import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { BrowserStorageService } from './services/browser-storage.service';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              provideClientHydration(), 
              {provide: BrowserStorageService},
              provideHttpClient(),
              provideAnimations()]
};
