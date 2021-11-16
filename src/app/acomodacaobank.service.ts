import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acomodacao } from './acomodacoes';

@Injectable({ providedIn: 'root' })
export class AcomodacaobankService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Acomodacao[]> {
    return this.http.get<Acomodacao[]>(' https://igorjuliana.herokuapp.com/');
  }
}
