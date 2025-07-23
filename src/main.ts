import 'zone.js';
import '@aws-amplify/ui-angular';

import { Amplify } from 'aws-amplify';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

Amplify.configure({
  Auth: {
    Cognito: {
      region: 'us-east-2',
      userPoolId: 'us-east-2_Gy86J3ghe',
      userPoolClientId: '458mgnel5bo57koff6r22c2n22',
      aws_cognito_identity_pool_id: undefined
    },
    loginWith: {
      oauth: {
        domain: 'us-east-2gy86j3ghe.auth.us-east-2.amazoncognito.com',
        scopes: ['email', 'openid', 'profile'],
        redirectSignIn: 'http://localhost:4200/login',
        redirectSignOut: 'http://localhost:4200/logout',
        responseType: 'code'
      }
    }
  },
  ssr: false
} as any);

bootstrapApplication(AppComponent, {
  providers: []
});
