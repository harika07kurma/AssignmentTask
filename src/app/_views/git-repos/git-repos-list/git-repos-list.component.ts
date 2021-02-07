import { Component, OnInit, HostListener } from '@angular/core';
import { GitRepoListService } from '../../../_services/git-repo-list.service';
import { Users } from '../../../_entities/gitRepo';
import { debounce } from 'lodash';

@Component({
  selector: 'app-git-repos-list',
  templateUrl: './git-repos-list.component.html',
  styleUrls: ['./git-repos-list.component.css']
})
export class GitReposListComponent implements OnInit {

  data$: Users[] = [];
  page = 1;
  items = 0;
  constructor(
    public gitRepoListService: GitRepoListService
  ) {
    this.onScroll = debounce(this.onScroll, 100);
  }

  ngOnInit(): void {
    this.search();
  }

  search(pageNumber: number = 1): void {
    const key = 'items';
    this.gitRepoListService.search(pageNumber).subscribe((res) => {
      if (pageNumber === 1) {
        this.data$ = res[key];
      } else {
        this.data$ = [...this.data$, ...res[key]];
      }
      this.items = this.data$.length;
    });
  }

  onScroll(): void {
    if (this.items > 0) {
      this.page = (this.items / 30) + 1;
      this.search(this.page);
    }
  }

}
