import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  message: string;

  constructor(private someserv: RandomService) { }

  ngOnInit() {
    this.someserv.telecast.subscribe(message => this.message = message);
  }

}
