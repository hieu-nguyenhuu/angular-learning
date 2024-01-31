import { Component, OnInit } from '@angular/core';
import { GithubService, repos } from 'src/app/core/models';

@Component({
  templateUrl: './repo-list.component.html',
})
export class RepoListComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit() {}

  userName: string = 'angular';
  repos: repos[] = [];
  loading: boolean = false;
  errorMessage: string = '';
  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName).subscribe(
      (response) => {
        this.repos = response;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        this.loading = false;
      },
    );
  }
}
