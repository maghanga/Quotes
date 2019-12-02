import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  
  quotes:Quote[] = [
    new Quote(1, 'God will rise', 'Ermias Asghedom', 'Thomas Maghanga'),
    new Quote(2, 'Get rich or die trying', '50 Cent', 'Nehru Oneil'),
    new Quote(3, 'The greatest human act is to inspire', 'Nipsey Hussle', 'Julian Pops'),
  ];

  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  constructor() { }

  ngOnInit() {
  }

}
