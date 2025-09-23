import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authorized=false;
    login_details=[
        {
            'username':'user1',
            'password':'password1',
            'authorized':false,
        },
    ];
    authenticate(username:string,password:string){
        if(username==this.login_details[0]['username'] && password==this.login_details[0]['password'])
            this.login_details[0]['authorized']=true;
        this.authorized=this.login_details[0]['authorized'];
        return this.authorized
    }
    isAuthenticated(){
        return this.authorized;
    }
}
