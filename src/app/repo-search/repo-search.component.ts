import { Component, OnInit } from '@angular/core';
import{Repo} from '../repofind';
import{RepoService} from '../reposervice'

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  providers:[RepoService],
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  repo:Repo[];
  constructor(reposervice:RepoService) {
  this.repo = reposervice.getrepo()
 }

  ngOnInit() {
    this.http.get("https:api.github.com/user/repos?access_token=d67a16a292d55ec18ec7c36b4956341eaeaba132").subscribe(data=>{

    })
  }

}
