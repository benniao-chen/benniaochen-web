import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { routing } from './home.route';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    routing,
  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    MenuOneComponent,
    MenuTwoComponent,
  ]
})
export class HomeModule { }
