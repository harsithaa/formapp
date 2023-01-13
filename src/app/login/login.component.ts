import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(private router:Router) { }
  submit(form:any){
    var firstName = form.firstName;
    console.log(firstName);
  
    var lastName = form.lastName;
    console.log(lastName);
  
    var comment = form.comment;
    console.log(comment);
    

  }
  goback(){
    // to navigate to main appcomponent use 
    //this.router.navigateByUrl('/')
    this.router.navigateByUrl('/bootstrapcomponent')
  }
  
}
