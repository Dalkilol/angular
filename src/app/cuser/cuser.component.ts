import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpModule, Http } from '@angular/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuser',
  templateUrl: './cuser.component.html',
  styleUrls: ['./cuser.component.css']
})
export class CuserComponent implements OnInit {
user: User = new User;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  createUser(){
    this.http.post('http://localhost:8080/users', this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/lusers']);
    }, err => {
    console.log(err);
    });
    }

}
