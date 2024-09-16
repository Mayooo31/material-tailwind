import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InProgressComponent } from '../in-progress/in-progress.component';
import { SiteSupportInformationComponent } from '../site-support-information/site-support-information.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-site-information',
  standalone: true,
  imports: [CommonModule, InProgressComponent, SiteSupportInformationComponent],
  templateUrl: './site-information.component.html',
  styleUrl: './site-information.component.scss',
})
export class SiteInformationComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
