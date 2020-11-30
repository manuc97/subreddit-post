import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Constants
import { APP_ROUTES_CONFIGURATION } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES_CONFIGURATION)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
