import { User} from '../model/user.model';
import { OnInit } from '@angular/core';
export class UserService implements OnInit {

    private user: User;
    
    
    ngOnInit() {
        this.user = new User("Tom", "Smith", "male", 185);
    }

    getUser(){
        return this.user;
    }
    
}