import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  messages: any = [];
  message: string;
  connectio : any;
  username: string;
  alert : boolean = false;

  constructor(private _chatService : ChatService) { }

  sendMessage(){
    this._chatService.sendMessage(this.message, this.username);
    this.message = '';
  }

  setUsername(){
    console.log('User is set');    
    this._chatService.setUsername(this.username);
    this.alert = true;//'User is set...';

  }

  ngOnInit() {
    this.connectio = this._chatService.getMessages()
      .subscribe(message => {
        console.log(message);  
        this.messages.push(message)      ;
      });
  }

  ngOnDestroy(){
    this.connectio.unsubscribe();

  }

}
