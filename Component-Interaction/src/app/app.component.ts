import { Component, OnInit } from '@angular/core';
import { MockService } from './mock.service';
import { Data } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Waiting for rain!';
  mockData: Data[] = [];
  constructor(private mockservice: MockService) {
    // Nothing
  }
  ngOnInit() {
    this.GetMockData();
  }

  GetMockData(): void {

    this.mockservice.mockData.subscribe(
      mockdata => {
        this.mockData = mockdata;
         console.log('Parent mockdata ' + this.mockData);
        }
      );
 }
}
