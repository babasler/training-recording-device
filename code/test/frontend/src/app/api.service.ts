import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    // Ersetze die URL mit der tatsächlichen URL, die du aufrufen möchtest
    return this.http.get('https://api.example.com/data');
  }
}
