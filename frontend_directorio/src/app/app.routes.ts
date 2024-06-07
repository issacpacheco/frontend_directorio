import { Routes } from '@angular/router';
import { ContactoListaComponent } from './contacto-lista/contacto-lista.component';
import { ContactoDetallesComponent } from './contacto-detalles/contacto-detalles.component';
import { ContactoFormComponent } from './contacto-form/contacto-form.component';

export const routes: Routes = [
  { path: '', component: ContactoListaComponent },
  { path: 'contact/:id', component: ContactoDetallesComponent },
  { path: 'add-contact', component: ContactoFormComponent },
  { path: 'edit-contact/:id', component: ContactoFormComponent },
];
