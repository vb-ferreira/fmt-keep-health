import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderComponent, SidebarComponent
  ],
  exports: [HeaderComponent, SidebarComponent]
})
export class SharedModule { }
