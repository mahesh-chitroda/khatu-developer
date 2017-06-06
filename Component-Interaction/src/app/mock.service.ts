import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Data } from './model';

@Injectable()
export class MockService {
  // private url= '../assets/data.json';
   private url = 'http://jsonplaceholder.typicode.com/posts';
  public mockData: Observable<Data[]>;
  constructor(private http: Http) {
    this.mockData = this.GetMockData();
  }

  private GetMockData(): Observable<Data[]> {
    console.log('Service Call ' + this.url);
    return this.http.get(this.url)
            .map(response => response.json());
  }
}
