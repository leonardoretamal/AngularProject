import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';

export const routes: Routes = [
  // /hola mundo => HolaMundoComponent
  // /admin => AdminComponent
  // /home => HomeComponent
  // /404 => NotFoundComponent

  {
    path: '',
    component: CounterPageComponent,
  },
];
