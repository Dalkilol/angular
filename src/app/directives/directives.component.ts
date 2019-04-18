import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  noms = ['jp', 'oceane', 'marianne', 'alexandre', 'flore', 'ceyhan'];

  show = true;
  msg = "juste un message";
  d = new Date();
  
  affCach(){
    this.show = this.show ? false : true;
  }
  constructor() { }

  ngOnInit() {
  }

}
