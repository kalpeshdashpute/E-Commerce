import { Component, OnInit,Input } from '@angular/core';
import { ServicesService } from '../services.service';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
title="welcome";

constructor(private cs:ServicesService){}

 ngOnInit() {


  }
  
}

