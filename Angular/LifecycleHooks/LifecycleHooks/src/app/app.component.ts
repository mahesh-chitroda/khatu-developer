import { Component, OnInit, OnChanges, OnDestroy , DoCheck, ChangeDetectorRef } from '@angular/core';
import { ChildData  } from '../model/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy , DoCheck {
  title = 'Life Cycle Hooks';
  lifeCycleHooks: string;
  childProp: string;
  showChild: boolean;
  childInputClass: ChildData;
  constructor(cd: ChangeDetectorRef) {
     // cd.detach();
    console.log('Hey I am parent constructor<br/><br/>');
  }
  ngOnInit() {
    console.log('Hey I am parent ngOnInit<br/><br/>');
    this.showChild = true;
    this.childInputClass = new ChildData();
    this.childInputClass.FirstName = 'Mahesh';
    this.childInputClass.LastName = 'Chitroda';
  }
  ngOnChanges() {
    console.log('Hey I am parent ngOnChanges<br/><br/>');
  }

  ngOnDestroy() {
    console.log('Hey I am parent ngOnDestroy<br/><br/>');
  }

  ngDoCheck() {
    console.log('Hey I am parent ngDoCheck<br/><br/>');
  }

  ChangeProperty() {
    this.childProp = 'Button click Event';
    this.childInputClass.FirstName = 'Mphasis';
  }

  HideChild() {
    this.showChild = false;
  }
}
