// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// libs
// TODO: ngx-i18n-router
// import { I18NRouterModule } from '@ngx-i18n-router/core';

// app
import { SharedModule } from '~/app/framework/core';
import { MaterialModule } from '~/app/framework/material';

// module
import { AboutComponent } from './about.component';
import { AboutUsComponent } from './about-us.component';
import { AboutBananaComponent } from './about-banana.component';
import { AboutApplePearComponent } from './about-apple-pear.component';
import { routes } from './about.routes';

@NgModule({
  imports: [
    CommonModule,
    // TODO: ngx-i18n-router
    // I18NRouterModule.forChild(routes, 'about')
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ],
  declarations: [
    AboutComponent,
    AboutUsComponent,
    AboutBananaComponent,
    AboutApplePearComponent
  ]
})
export class AboutModule {
}
