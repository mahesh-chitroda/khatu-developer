import { Component, OnInit, Input, OnChanges, SimpleChanges , OnDestroy , DoCheck, ChangeDetectorRef } from '@angular/core';
import { ChildData  } from '../../model/app.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges , OnDestroy , DoCheck {
  @Input() inputProp;
  childClass: ChildData;
  @Input()
  set childInputData(childClass: ChildData) {
    this.childClass = childClass;
  }
  get childInputData() {
    return this.childClass;
  }

 childComponentLifeCycle: string;

  constructor(public cd: ChangeDetectorRef) {
//     this.cd.detach();
    console.log('Child Component constructor<br/><br/>');
  }

  ngOnInit() {
    console.log('Child Component ngOnInit<br/><br/>');
    console.log('Child Component ngOnInit:' + this.childInputData);
  }

  ngOnDestroy() {
    console.log('Child Component ngOnDestroy<br/><br/>');
  }

  ngDoCheck() {
    console.log('ngDoCheck' + this.childInputData);
    console.log('Child component ngDoCheck');
  }

  Change() {
    this.childClass.FirstName = 'First Name change';
    this.childClass.LastName = 'LastName Name change';
    this.cd.detectChanges();
  }

   ngOnChanges(change: SimpleChanges) {
    console.log('Child Component ngOnChanges<br/><br/>');
    const changeProp = change['childInputData'];
    console.log(changeProp);
    if (changeProp) {
      // this.childComponentLifeCycle += 'Old Value ' + changeProp.previousValue + '<br/><br/>';
      // this.childComponentLifeCycle += 'New Value ' + changeProp.currentValue + '<br/><br/>';
    }
  }
}
