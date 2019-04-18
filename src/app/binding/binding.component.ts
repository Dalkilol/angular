import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  title = 'title'
  nom = 'nom';
  name = 'name';



  changeName() {
    this.name ="nomchangé"; 
  }
  ngOnInit() {
  }

}
