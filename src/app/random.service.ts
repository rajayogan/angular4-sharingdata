import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RandomService {

  private msgsource = new BehaviorSubject<string>('this is the default');
  telecast = this.msgsource.asObservable();

  constructor() { }

  editMsg(newmsg) {
    this.msgsource.next(newmsg);
  }

}
