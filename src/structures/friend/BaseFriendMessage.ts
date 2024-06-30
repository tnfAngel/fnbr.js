import BaseMessage from '../BaseMessage';
import type ClientUser from '../user/ClientUser';
import type Friend from './Friend';
import type Client from '../../Client';
import type { MessageData } from '../../../resources/structs';

/**
 * Represents a friend whisper message
 */
class BaseFriendMessage extends BaseMessage {
  /**
   * The message's content
   */
  public override content: string;

  /**
   * The message's author
   */
  public override author: Friend | ClientUser;

  /**
   * @param client The main client
   * @param data The message's data
   */
  constructor(client: Client, data: MessageData & { author: Friend | ClientUser; }) {
    super(client, data);

    this.content = data.content;
    this.author = data.author;
  }

  /**
   * Replies to this whisper message
   * @param content The message that will be sent
   * @throws {FriendNotFoundError} The user is not friends with the client
   */
  public reply(content: string) {
    return this.client.friend.sendMessage(this.author.id, content);
  }
}

export default BaseFriendMessage;
