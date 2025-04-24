import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  reservations = [
    { id: 1, customer: 'John Doe', date: '2023-05-15', time: '10:00 AM' },
    { id: 2, customer: 'Jane Smith', date: '2023-05-16', time: '2:00 PM' }
    
  ];
}