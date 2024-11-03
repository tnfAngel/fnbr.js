import BaseFriendMessage from './BaseFriendMessage';
import type Friend from './Friend';
import type Client from '../../Client';
import type { MessageData } from '../../../resources/structs';

/**
 * Represents a received friend whisper message
 */
class ReceivedFriendMessage extends BaseFriendMessage {
  /**
   * The message's author
   */
  public override author: Friend;

  /**
   * @param client The main client
   * @param data The message's data
   */
  constructor(client: Client, data: MessageData & { author: Friend; }) {
    super(client, data);

    this.author = data.author;
  }

  /**
   * Replies to this whisper message
   * @param content The message that will be sent
   * @throws {FriendNotFoundError} The user is not friends with the client
   */
  public override reply(content: string) {
    return this.client.friend.sendMessage(this.author.id, content);
  }
}

export default ReceivedFriendMessage;
