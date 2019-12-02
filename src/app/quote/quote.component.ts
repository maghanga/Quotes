import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  
  quotes:Quote[] = [
    {id:1, name:'Get rich or die trying', author:'50 Cent', publisher:'Thomas Maghanga'},
    {id:2, name:'The highest human act is to inspire', author:'Nipsey Hussle', publisher:'Nehru Oneil'},
    {id:3, name:'God will rise', author:'Ermias Asghedom', publisher:'Kayla Makena'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
