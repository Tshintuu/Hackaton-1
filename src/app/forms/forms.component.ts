import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  model: formulaire=new formulaire();

  constructor() { }

  ngOnInit() {
  }
}
 export class formulaire {
    name: string;
}