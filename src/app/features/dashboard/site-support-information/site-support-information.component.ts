import { Component, signal } from '@angular/core';

const data = [
  {
    name: 'BAEZ ARREDONDO, NIDYA OBED',
    title: 'Site Head',
    email: 'NIDYA.BAEZARREDONDO@ound.org',
    phone: '(510) 555-1212',
  },
  {
    name: 'SURESH, SAILAJA',
    title: 'Area Superintendent',
    email: 'SAILAJA.SURESH@ousd.org',
    phone: '(510) 555-1212',
  },
  {
    name: 'BADAMI, ANGELA GRACE',
    title: 'HR Analyst',
    email: 'ANGELA.BADAMI@ousd.org',
    phone: '(510) 555-1212',
  },
  {
    name: 'ROBLES, SANTIAGO D',
    title: 'Budget Analyst',
    email: 'SANTIAGO.ROBLES@ousd.org',
    phone: '(510) 555-1212',
  },
  {
    name: 'SHERMAN, DIANA RUTH',
    title: 'Resource Teacher',
    email: 'DIANA.SHERMAN@ousd.org',
    phone: '(510) 555-1212',
  },
];

@Component({
  selector: 'app-site-support-information',
  standalone: true,
  imports: [],
  templateUrl: './site-support-information.component.html',
  styleUrl: './site-support-information.component.scss',
})
export class SiteSupportInformationComponent {
  data = signal(data);
}
