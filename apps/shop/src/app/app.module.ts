import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// TSLint error import { createUser } from '@shop/domain-user';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('@shop/feature-auth').then(m => m.AuthModule),
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
