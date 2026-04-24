import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import {TestService} from '../../service/test-service.service';

@Component({
  selector: 'app-test-component',
  imports: [
    Button
  ],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css'
})
export class TestComponent {
  private testService = inject(TestService);

  backendMessage: string = '';

  fetchMessage() {
    this.testService.getHelloMessage().subscribe({
      next: (response) => {
        this.backendMessage = response.message;
      },
      error: (error) => {
        console.error('Error fetching from backend:', error);
        this.backendMessage = 'Failed to connect. Is Spring Boot running?';
      }
    });
  }
}
