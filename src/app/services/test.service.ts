import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const Base=('https://jsonplaceholder.typicode.com/todos/1');

@Injectable({
  providedIn: 'root'
})
export class TestService {
  http = inject(HttpClient);

  constructor() { }

  getTodo() {
    return this.http.get(Base);
  }
}
