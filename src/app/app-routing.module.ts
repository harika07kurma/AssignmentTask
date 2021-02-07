import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/git-repo-list',
    pathMatch: 'full'
  },
  {
    path: 'git-repo-list',
    loadChildren: () => import('./_views/git-repos/git-repos.module').then(m => m.GitReposModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
