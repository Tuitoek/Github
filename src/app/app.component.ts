import { Component } from '@angular/core';
import{UserService} from 'userservice';
import{RepoService} from 'reposervice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[UserService,RepoService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apps';
  constructor(userservice:UserService,reposervice:RepoService){

  }
  ngOnIt(){

  }
}
