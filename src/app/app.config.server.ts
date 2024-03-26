import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { BrowserStorageService } from './services/browser-storage.service';
import { BrowserStorageServerService } from './services/browser-storage-server.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: BrowserStorageService,
      useClass: BrowserStorageServerService,
    },
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
