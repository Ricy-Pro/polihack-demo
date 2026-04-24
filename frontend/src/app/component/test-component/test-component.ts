import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { TestService } from '../../service/test-service.service';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [Button],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css'
})
export class TestComponent {
  private testService = inject(TestService);

  kotlinMessage: string = '';
  errorMessage: string = '';

  fetchKotlin() {
    this.kotlinMessage = 'Connecting to laptop...';
    this.testService.getKotlinHello().subscribe({
      next: (res) => this.kotlinMessage = res.message,
      error: (err) => {
        console.error(err);
        this.kotlinMessage = 'Laptop/ngrok is offline.';
      }
    });
  }


  supabaseMessage: string = '';

  fetchSupabase() {
    this.testService.getSupabaseHello().subscribe({
      next: (res) => {
        if (res.data && res.data.length > 0) {
          this.supabaseMessage = res.data[0].continut;
        } else {
          this.supabaseMessage = 'Tabela e goală!';
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Supabase connection failed.';
      }
    });
  }
}
