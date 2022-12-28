import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/app/models/User';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // next:any;
  public users:User[]=[] as User[];
  public errormessage:string | undefined = undefined;
    
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }
  getUsersData(){
    this.userService.getUsers().subscribe( (data:User[]) => {
      this.users = data;
    }, (error) => {
      console.log(error);;
      this.errormessage = error
    });
  }
}
