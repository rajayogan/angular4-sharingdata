import { Component, OnInit, Input } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input('incomingmsg') newrandmsg: string;

  message: string;
  editedmsg: string;

  constructor(private someserv: RandomService) { }

  ngOnInit() {
    this.someserv.telecast.subscribe(message => this.message = message);
  }

  editthemsg() {
    this.someserv.editMsg(this.editedmsg);
  }

}
