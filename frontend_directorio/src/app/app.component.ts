import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoListaComponent } from './contacto-lista/contacto-lista.component';
import { ListaComponent } from './components/lista/lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComponent, ContactoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_directorio';
}
