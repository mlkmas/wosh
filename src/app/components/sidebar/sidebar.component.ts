import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navItems = [
    { path: '/home/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/home/customers', icon: 'people', label: 'Customers' },
    { path: '/home/partners', icon: 'handshake', label: 'Partners' },
    { path: '/home/reservations', icon: 'calendar_today', label: 'Reservations' }
  ];
}