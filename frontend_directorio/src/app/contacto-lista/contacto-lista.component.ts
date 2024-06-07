import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Productos } from '../interfaces/lista.interfaces';

@Component({
  selector: 'app-contacto-lista',
  standalone: true,
  imports: [],
  templateUrl: './contacto-lista.component.html',
  styleUrl: './contacto-lista.component.css',
})
export class ContactoListaComponent implements OnInit {
  Productos: Productos[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.apiService.getProductos().subscribe({
      next: (data) => {
        this.Productos = data;
        console.log(this.Productos);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editarProducto(id: number): void {
    this.Productos.navigate['/edit-contact', id];
  }

  eliminarProducto(id: number): void {
    // Lógica para eliminar el producto
  }
}
