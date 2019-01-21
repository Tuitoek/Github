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
  }

}
