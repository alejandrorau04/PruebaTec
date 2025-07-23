import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fetchAuthSession, getCurrentUser, signInWithRedirect } from 'aws-amplify/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(async params => {
      if (params['code']) {
        try {
          const session = await fetchAuthSession();
          const token = session.tokens?.accessToken?.toString();
          if (!token) throw new Error('Token vacío');
          const user = await getCurrentUser();
          console.log('Usuario:', user.username);
          this.router.navigate(['/dashboard']);
        } catch {
          this.router.navigate(['/login']);
        }
      }
    });
  }

  async signIn(): Promise<void> {
    await signInWithRedirect();
  }
}
