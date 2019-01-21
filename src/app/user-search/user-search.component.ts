import { Component, OnInit } from '@angular/core';
import {User} from '../userfind';
import{UserService} from '../userservice';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  providers:[UserService],
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  user:user[];
  constructor(userservice:UserService) {
   this.user = userservice.getuser()
  }

  ngOnInit() {
    this.http.get("https:api.github.com/user/repos?access_token=d67a16a292d55ec18ec7c36b4956341eaeaba132").subscribe(data=>{

    })
  }

}
