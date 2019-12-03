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

  

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    quote.timeSince = new Date();
    this.quotes.push(quote);
  }

  like(index) {
    this.quotes[index].likes += 1;
  }
  dislike(index) {
    this.quotes[index].dislikes += 1;
  }

  highestVotes: number = 0;
  quotesIndex: number = 0;
  calculateHighestVotes() {
    for (var i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].likes > this.highestVotes) {
        this.highestVotes = this.quotes[i].likes;
        this.quotesIndex = i;
      }
    }
  }

  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  deleteQuote(isDone, index){
    if(isDone){
      let toDelete = confirm(`Do you really want to delete this quote?`);
      if(toDelete){
        this.quotes.splice(index,1);
      }
     
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
