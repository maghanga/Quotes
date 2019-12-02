import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quote = [
    {id:1, name:'Get rich or die trying'},
    {id:2, name:'The highest human act is to inspire'},
    {id:3, name:'God will rise'},
  ];
}
