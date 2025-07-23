import { Injectable } from '@angular/core';

export interface Member {
  email: string;
  role: 'Owner' | 'Admin' | 'Member';
}

@Injectable({ providedIn: 'root' })
export class MemberService {
  private members: Member[] = [
    { email: 'owner@empresa.com', role: 'Owner' },
    { email: 'admin@empresa.com', role: 'Admin' },
    { email: 'user@empresa.com', role: 'Member' }
  ];

  getMembers(): Member[] {
    return [...this.members];
  }

  invite(email: string): void {
    this.members.push({ email, role: 'Member' });
  }

  updateRole(email: string, role: Member['role']): void {
    const member = this.members.find(m => m.email === email);
    if (member) member.role = role;
  }

  remove(email: string): void {
    this.members = this.members.filter(m => m.email !== email);
  }
}
