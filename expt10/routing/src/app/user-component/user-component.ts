import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent {
    authorized=false;
    constructor(private authService: AuthService, private router: Router) {}
    validateUser(username:string,password:string){
        this.authorized=this.authService.authenticate(username,password);
        this.router.navigate(['/book']);
    }
}
