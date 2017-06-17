import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  private socket : any;

  constructor() { }

  sendMessage(msg: string, user: string){
    this.socket.emit('add-message', msg, user);
  }

  getMessages(){
    let observable = new Observable((observer: any) =>{
      this.socket = io(this.url);
      this.socket.on('message', (data:any) =>{
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getUsername(){
    return sessionStorage.getItem('username');
  }

  setUsername(user: string){
    sessionStorage.setItem('username', user);
  }

}
