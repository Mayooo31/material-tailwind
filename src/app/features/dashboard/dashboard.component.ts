import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { NonSalaryCostsComponent } from './non-salary-costs/non-salary-costs.component';
import { SiteInformationComponent } from './site-information/site-information.component';
import { CertificatedStaffSubjectsComponent } from './certificated-staff-subjects/certificated-staff-subjects.component';
import { InProgressComponent } from '../../shared/components/in-progress/in-progress.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  selectedCategory = signal(1);
  categories = [
    { label: 'Site Information', component: SiteInformationComponent },
    { label: 'Allocations', component: InProgressComponent },
    {
      label: 'SPSA Executive Summary and Attachments',
      component: InProgressComponent,
    },
    {
      label: 'Site Goals, Actions and Costs',
      component: InProgressComponent,
    },
    { label: 'FTE Requirements', component: InProgressComponent },
    {
      label: 'Certificated Staff Subjects',
      component: CertificatedStaffSubjectsComponent,
    },
    { label: 'Salaried Costs', component: InProgressComponent },
    { label: 'Non-Salary Costs', component: NonSalaryCostsComponent },
    { label: 'Summary', component: InProgressComponent },
    { label: 'Signature', component: InProgressComponent },
  ];

  changeCategory(index: number) {
    this.selectedCategory.set(index);
  }
}
