import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestService {

constructor(private http: HttpClient) { }

public getUser() {
  return new Observable(observer => {
    setTimeout(() => {
      observer.next({
        user: 'Test User'
      });
    });
  });
}

}
