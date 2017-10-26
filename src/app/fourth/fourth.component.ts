import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

 message: string;

  constructor(private someserv: RandomService) { }

  ngOnInit() {
    
  }

  subscribebeh() {
    this.someserv.telecast.subscribe(message => this.message = message);
  }

}
