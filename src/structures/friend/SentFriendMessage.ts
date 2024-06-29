import BaseFriendMessage from './BaseFriendMessage';
import type ClientUser from '../user/ClientUser';
import type Client from '../../Client';
import type { MessageData } from '../../../resources/structs';

/**
 * Represents a sent friend whisper message
 */
class SentFriendMessage extends BaseFriendMessage {
  /**
   * The message's author
   */
  public override author: ClientUser;

  /**
 * @param client The main client
 * @param data The message's data
 */
  constructor(client: Client, data: MessageData & { author: ClientUser; }) {
    super(client, data);

    this.author = data.author;
  }
}

export default SentFriendMessage;
