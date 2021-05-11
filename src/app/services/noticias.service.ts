import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(params: any): Observable<any> {
    const URL = `https://newsapi.org/v2/top-headlines?country=${params.pais}&category=${params.categoria}&apiKey=9d3b7099aae24d24a8fa12f5d0a9c6ad`;
    return this.http.get(URL);
  }
}
