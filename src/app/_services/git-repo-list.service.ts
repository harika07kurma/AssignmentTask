import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../_entities/gitRepo';
import { map } from 'rxjs/operators';
import { SharedService } from '../_shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class GitRepoListService {

 private gitRepoUrl = 'https://api.github.com/search/repositories?q=created:>2020-05-22&sort=stars&order=desc&page=';
  constructor(
    public http: HttpClient,
    private sharedService: SharedService
  ) { }

  search(criteria: number): Observable<Users[]> {
    return this.sharedService.get(this.gitRepoUrl + criteria)
      .pipe(map(result => {
        return result;
      }));
  }
}


