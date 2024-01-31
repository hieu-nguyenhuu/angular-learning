import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { repos } from '../repos';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
  baseUrl: string = 'https://api.github.com/';

  constructor(private httpClient: HttpClient) {}

  getRepos(userName: string): Observable<repos[]> {
    return this.httpClient.get<repos[]>(this.baseUrl + 'users/' + userName + 'repos');
  }
}
