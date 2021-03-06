import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {ServicesService} from '../services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fgregister:FormGroup;
  constructor(private fb:FormBuilder,private cs:ServicesService,private toastr: ToastrService) { 
    this.fgregister=this.fb.group({
      name:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.minLength(8)]],
      password:['',[Validators.required,Validators.minLength(8)]],
      message:['',[Validators.required,Validators.minLength(8)]],

    })

  }

  ngOnInit(): void {
  }
register(){
   var obj=this.fgregister.value;
   this.cs.registerData(obj).subscribe((resp)=>{
     this.toastr.success('user registered sucessfully');
     this.fgregister.reset();
   })
}
}
