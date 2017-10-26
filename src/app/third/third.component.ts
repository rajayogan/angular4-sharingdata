import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  message: string;

  constructor(private someserv: RandomService) { }

  ngOnInit() {
    this.someserv.telecast.subscribe(message => this.message = message);
  }

}
