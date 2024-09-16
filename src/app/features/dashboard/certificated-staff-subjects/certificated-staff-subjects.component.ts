import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { InProgressComponent } from '../in-progress/in-progress.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

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
