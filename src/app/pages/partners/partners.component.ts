import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms'; // Add this import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners: any[] = [];
  filteredPartners: any[] = [];
  searchTerm: string = '';
  selectedPartner: any = null;
  showDetailsModal: boolean = false;
  showPackageModal: boolean = false;
  newPackage: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadPartners();
  }

  loadPartners(): void {
    this.apiService.getPartners().subscribe({
      next: (data) => {
        this.partners = data;
        this.filteredPartners = [...this.partners];
      },
      error: (error) => {
        console.error('Error loading partners:', error);
      }
    });
  }

  filterPartners(): void {
    if (!this.searchTerm) {
      this.filteredPartners = [...this.partners];
      return;
    }
    this.filteredPartners = this.partners.filter(partner =>
      partner.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      partner.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      partner.phoneNumber?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewPartnerDetails(partner: any): void {
    this.apiService.getPartnerDetails(partner.id).subscribe({
      next: (details) => {
        this.selectedPartner = { ...partner, ...details };
        this.showDetailsModal = true;
      },
      error: (error) => {
        console.error('Error loading partner details:', error);
      }
    });
  }

  updatePartnerStatus(partnerId: string, isSuspended: boolean): void {
    this.apiService.updatePartnerStatus(partnerId, isSuspended).subscribe({
      next: () => {
        const partner = this.partners.find(p => p.id === partnerId);
        if (partner) {
          partner.isSuspended = isSuspended;
        }
      },
      error: (error) => {
        console.error('Error updating partner status:', error);
      }
    });
  }

  openAddPackageModal(partner: any): void {
    this.selectedPartner = partner;
    this.showPackageModal = true;
    this.newPackage = {};
  }

  addPackage(): void {
    // Implement API call to add package
    console.log('Adding package:', this.newPackage);
    this.showPackageModal = false;
  }
}