import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionFormularioComponent } from './seccion-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [SeccionFormularioComponent],
  exports: [
    SeccionFormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1219300672587146')
          }
        ],
        onError: (error: any) => {
          console.log(error)
        },
      } as SocialAuthServiceConfig
    },
    provideHttpClient(withFetch())
  ],
})
export class FormularioModule { }
