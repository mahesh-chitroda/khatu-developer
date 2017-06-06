import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../model';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public localData: Data[] = [];
 // mockData: Data[] = [];
  // @Input()
  // set data(info: Data[]) {
  //   this.localData = info;
  // }
  // get data(): Data[] {
  //   return this.localData;
  // }

   public AccessLocalData(): void {
     console.log('local data accessible ' + this.localData);
     console.log('local data property ' + this.localData[0].id);
   }

  constructor(private mockservice: MockService) {
    // console.log('constructor ' + this.localData.length);
  }
  ngOnInit() {
    // console.log('ngOnInit ' + this.localData.length);
    this.GetMockData();
  }

  GetMockData(): void {
    this.mockservice.mockData.subscribe(
          mockdata => {
             this.localData = mockdata;
             this.localData[0].title = 'Mphasis';
             console.log('child data ' + this.localData);
          }
        );
  }
}
