import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://mp72800d43cdc3f2b38f.free.beeceptor.com/productos';
  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/productos`);
  }

  getProducto(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/productos/${id}`);
  }

  updateProducto(id: number, producto: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/productos/${id}`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/productos/${id}`);
  }

}
