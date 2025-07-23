import { Component } from '@angular/core';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userEmail: string = '';

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    const user = await getCurrentUser();
    this.userEmail = user.signInDetails?.loginId || 'Desconocido';
  }

  async signOut(): Promise<void> {
    await signOut();
    this.router.navigate(['/login']);
  }
}
