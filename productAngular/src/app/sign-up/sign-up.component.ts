import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 fglogin:FormGroup;
 data:any;
 
 
constructor(private fb:FormBuilder,private cs:ServicesService,private router:Router,private toastr: ToastrService) { 
   this.fglogin=this.fb.group({
     email:[],
     password:[]
   })
  }
 
  ngOnInit(): void {
  }
  login(){
    var obj =this.fglogin.value;
    this.cs.login(obj).subscribe((resp:any )=>{
    if(resp){
       localStorage.setItem('token',resp.token)
       this.toastr.success('user login sucessfully');
       this.router.navigate(['/user']);
    }
 
   if(!resp){
    alert('Login failed.. !!!');
   }
    
    })
  }
  }

