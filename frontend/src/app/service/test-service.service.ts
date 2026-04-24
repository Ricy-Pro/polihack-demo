import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface HelloResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private http = inject(HttpClient);


  private ngrokUrl = 'https://089f-5-2-197-133.ngrok-free.app/api/hello';


  private supabaseUrl = 'https://hkyypabsbycyldzrwcki.supabase.co';
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhreXlwYWJzYnljeWxkenJ3Y2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNDM4NDYsImV4cCI6MjA5MjYxOTg0Nn0.W8aFMh8ofiJlFG_uYjPvNY8R9L0HpxwoON-dRNs33lA';
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  getKotlinHello(): Observable<HelloResponse> {
    const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');

    return this.http.get<HelloResponse>(this.ngrokUrl, { headers });
  }

  getSupabaseHello(): Observable<any> {
    return from(this.supabase.from('mesaje').select('*'));
  }
}
