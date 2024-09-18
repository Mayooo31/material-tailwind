import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { InProgressComponent } from '../../../shared/components/in-progress/in-progress.component';

@Component({
  selector: 'app-certificated-staff-subjects',
  standalone: true,
  imports: [InProgressComponent, EmployeeListComponent],
  templateUrl: './certificated-staff-subjects.component.html',
  styleUrl: './certificated-staff-subjects.component.scss',
})
export class CertificatedStaffSubjectsComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
