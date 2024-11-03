import BasePartyJoinRequest from './BasePartyJoinRequest';
import type ClientUser from '../user/ClientUser';
import type Friend from '../friend/Friend';
import type Client from '../../Client';

/**
 * Represents an outgoing party join request
 */
class SentPartyJoinRequest extends BasePartyJoinRequest {
  public override receiver: Friend;
  public override sender: ClientUser;

  /**
 * @param client The main client
 * @param sender The user who requested to join the party
 * @param receiver The user who received the join request
 * @param data The party confirmation data
 */
  constructor(client: Client, sender: ClientUser, receiver: Friend, data: any) {
    super(client, sender, receiver, data);

    this.sender = sender;
    this.receiver = receiver;
  }
}

export default SentPartyJoinRequest;
