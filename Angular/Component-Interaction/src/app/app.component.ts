import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './model/user.model';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(ChildComponent) child;

  userList: Array<User>;
  userDetails: User;
  constructor() {

  }

  ngOnInit() {
    this.userList = new Array<User>();
    this.userList.push(new User(1, 'A1', '8866135526', 'A-504'));
    this.userList.push(new User(1, 'B1', '8926552131', 'B-504'));
    this.userList.push(new User(1, 'C1', '5421321321', 'C-504'));
    this.userList.push(new User(1, 'D1', '8421231313', 'D-504'));
    this.userDetails = this.userList[0];
  }

  childEventCallByParentViewChild(): void {
      this.child.childEventCallByParentUsingViewChild();
  }

  ShowUserDetails(user: User) {
    this.userDetails = user;
  }
  saveDetails($event): void {
    console.log($event);
    this.userDetails = $event;
  }
}
