import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Body, Post } from '@nestjs/common/decorators';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Post('create')
  createChat(@Body() data) {
    return this.chatService.createChat(data);
  }
}
