import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { CONFIG } from './config';
import { ToastService } from './toast/toast.service';

export interface ResetMessage {
  message: string;
}

@Injectable()
export class MessageService {
  private subject = new Subject<ResetMessage>();

  state = this.subject;

  constructor(private http: Http, private toastService: ToastService) { }

  problem() {
    let msg = 'Oops, we have a problem';
    this.http.post(CONFIG.baseUrls.config, null)
      .subscribe(() => {
        this.subject.next({ message: msg });
        this.toastService.activate(msg);
      });
  }
}
