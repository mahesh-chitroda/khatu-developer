import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  private userDetails: User;
  private change: string;
  private preVal: string;
  private currVal: string;
  private isEdit = false;

  @Output() saveDetails = new EventEmitter<User>();

  @Input()
  set UserDetails(paramUserDetails: User) {
    this.userDetails = paramUserDetails;
  }
  get UserDetails() {
    return this.userDetails;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const userDetailsProp = changes['UserDetails'];
    if (userDetailsProp.isFirstChange()) {
      if (userDetailsProp) {
        this.currVal = userDetailsProp.currentValue;
        this.preVal = userDetailsProp.previousValue;
      }
      this.change = 'User Details change';
    }
  }

  Edit(): void {
    this.isEdit = true;
  }
  Cancel(): void {
    this.isEdit = false;
  }

  childEventCallByParent(): void {
    alert('This is child event which has been called by parent using template variable.');
  }

  childEventCallByParentUsingViewChild(): void {
    alert('This is child event which has been called by parent using view child.');
  }


  Save(): void {
    this.saveDetails.emit(this.UserDetails);
    this.isEdit = false;
  }
}
