import { Component } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent {
  organizations = [
    { id: 'ORG001', name: 'TechNova', region: 'LatAm' },
    { id: 'ORG002', name: 'GreenByte', region: 'Europe' },
    { id: 'ORG003', name: 'DataForge', region: 'Asia' }
  ];
}
