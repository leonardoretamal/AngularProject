import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';

export const routes: Routes = [
  // /hola mundo => HolaMundoComponent
  // /admin => AdminComponent
  // /home => HomeComponent
  // /404 => NotFoundComponent

  {
    path: '',
    component: CounterPageComponent,
  },
  {
    //el path no puede empezar con un /
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
