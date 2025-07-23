import { Component } from '@angular/core';
import { MemberService, Member } from 'src/app/services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  members: Member[] = [];
  newEmail: string = '';

  constructor(private memberService: MemberService) {
    this.members = this.memberService.getMembers();
  }

  invite(): void {
    if (this.newEmail.trim()) {
      this.memberService.invite(this.newEmail.trim());
      this.newEmail = '';
      this.members = this.memberService.getMembers();
    }
  }

  changeRole(email: string, newRole: string): void {
    this.memberService.updateRole(email, newRole);
    this.members = this.memberService.getMembers();
  }

  remove(email: string): void {
    this.memberService.remove(email);
    this.members = this.memberService.getMembers();
  }
}
