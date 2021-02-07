import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { DateDiffPipe  } from '../../_pipes/date-diff.pipe';
import { StarsCountPipe  } from '../../_pipes/stars-count.pipe';

import { GitReposRoutingModule } from './git-repos-routing.module';
import { GitReposListComponent } from './git-repos-list/git-repos-list.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    GitReposListComponent,
    DateDiffPipe,
    StarsCountPipe
  ],
  imports: [
    CommonModule,
    GitReposRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    InfiniteScrollModule
  ]
})
export class GitReposModule { }
