import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat } from 'rxjs';
import { Contact, Phone } from '../model/data.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://mp25569cdf7cae6731bb.free.beeceptor.com/productos';
  constructor(private httpClient: HttpClient) { }

  public getData():Observable<any>{
    return this.httpClient.get(this.apiUrl).pipe(res=>res);
  }

}
