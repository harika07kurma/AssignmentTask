import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitReposListComponent } from './git-repos-list/git-repos-list.component';

const routes: Routes = [
  {
    path: '',
    component: GitReposListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitReposRoutingModule { }
