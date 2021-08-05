import { Component, OnInit } from '@angular/core';
import { Message } from '../model/Message';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 mesagem:string = "";
  message: Message = new Message
  messageList: Message[]

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  send()
  {
    this.messageService.postMessage(this.message).subscribe((resp)=>{
      this.message = resp
      alert('Mensagem cadastrada.')
      this.message = new Message()
    })
  }

}
