import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


constructor(private cs:ServicesService,private toastr: ToastrService) { }

  loginUser="true";
  ngOnInit(): void {
  }
  loggedIn(){
 
  }

  Logout(){
     this.cs.logout()
     this.loginUser="false";
     this.toastr.success('logged out sucessfully.. !!!');
  
    
  }
isLoggedIn(){
  this.loginUser="true";
  this.cs.loggedIn();

}

}
