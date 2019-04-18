import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attrib',
  templateUrl: './attrib.component.html',
  styleUrls: ['./attrib.component.css']
})
export class AttribComponent implements OnInit {


  nom;
  affNom(n){
    this.nom = n;
    

  }
  constructor() { }

  ngOnInit() {
  }

}
