import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
/* Directives */
import { AutoFocusDirective } from './directives/auto-focus.directive';
/* Components */
import { MultiLanguageComponent } from './components/multi-language/multi-language.component';
/* Services */
import { GetBlobService } from './services/get-blob.service';
/* Interceptors */
import { RequestInterceptor } from './interceptors/request.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AutoFocusDirective,
    MultiLanguageComponent,
  ],
  exports: [
    AutoFocusDirective,
    FormsModule,
    ReactiveFormsModule,
    MultiLanguageComponent,
  ]
})

export class ShareModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareModule,
            providers: [
              GetBlobService,
              { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },

            ],
        }
    }
}
