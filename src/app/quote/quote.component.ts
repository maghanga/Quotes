import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  
  quotes:Quote[] = [
    new Quote(1, 'God will rise', 'Ermias Asghedom', 'Thomas Maghanga', new Date(2018, 11, 24, 10, 33, 30, 0), 0, 0),
    new Quote(2, 'Get rich or die trying', '50 Cent', 'Nehru Oneil', new Date(2018, 12, 25, 8, 30, 50, 0), 0, 0),
    new Quote(3, 'The greatest human act is to inspire', 'Nipsey Hussle', 'Julian Pops', new Date(2019, 1, 2, 11, 20, 12, 0), 0, 0),
  ];

  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  deleteQuote(isDone, index){
    if(isDone){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
