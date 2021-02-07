import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';





import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    
   
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
