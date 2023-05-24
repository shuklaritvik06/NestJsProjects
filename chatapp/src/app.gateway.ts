import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  @SubscribeMessage('sendMessage')
  handleSendMessage(
    _client: Socket,
    payload: {
      message: string;
    },
  ) {
    this.server.emit('recMessage', payload);
  }

  afterInit(server: Server) {
    console.log('Server Init ' + server.engine.clientsCount);
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ..._args: any[]) {
    console.log(`Connected ${client.id}`);
  }
}
