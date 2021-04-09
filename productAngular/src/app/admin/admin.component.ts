import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  contact:any=[];
  constructor(private cs:ServicesService) { 

  }

  ngOnInit(): void {
    this.getContacts()
  }
getContacts(){
  this.cs.fetch().subscribe((result)=>{
    this.contact=result;
    console.log(result);
  })
}

deleted(i:any,obj:any){
  
  alert('deleted successfully..!!');
  
  this.contact.splice(i,1); 
  
  this.cs.delete({"id":obj}).subscribe((resp:any)=>{
    console.log(resp);
    
   
  })
}



 }

