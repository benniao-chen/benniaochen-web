import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './login.route';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ShareModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
