import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { fetchAuthSession } from 'aws-amplify/auth';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(): Promise<boolean> {
    try {
      const session = await fetchAuthSession();
      const accessToken = session.tokens?.accessToken?.toString();
      if (!accessToken) throw new Error('Token no disponible');
      return true;
    } catch {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
