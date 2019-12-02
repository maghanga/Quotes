import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  
  quotes:Quote[] = [
    new Quote(1, 'God will rise', 'Ermias Asghedom', 'Thomas Maghanga', new Date(2019,11,29)),
    new Quote(2, 'Get rich or die trying', '50 Cent', 'Nehru Oneil', new Date(2019,11,30)),
    new Quote(3, 'The greatest human act is to inspire', 'Nipsey Hussle', 'Julian Pops', new Date(2019,12,1)),
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
