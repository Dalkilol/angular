import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-lusers',
  templateUrl: './lusers.component.html',
  styleUrls: ['./lusers.component.css']
})
export class LusersComponent implements OnInit {
data;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/users').subscribe(
      response => {
        console.log(response.json());
        this.data = response.json();
      }

    );
  }

}
