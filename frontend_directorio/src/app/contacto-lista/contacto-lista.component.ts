import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Contacto } from '../interfaces/lista.interfaces';

@Component({
  selector: 'app-contacto-lista',
  standalone: true,
  imports: [],
  templateUrl: './contacto-lista.component.html',
  styleUrl: './contacto-lista.component.css',
})
export class ContactoListaComponent implements OnInit {
  Contacto: Contacto[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.apiService.getData().subscribe({
      next: (data) => {
        this.Contacto = data;
        console.log(this.Contacto);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
