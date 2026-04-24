import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/hello';

  getHelloMessage(): Observable<HelloResponse> {
    return this.http.get<HelloResponse>(this.apiUrl);
  }
}
