import Endpoints from '../../../resources/Endpoints';
import PartyInvitationExpiredError from '../../exceptions/PartyInvitationExpiredError';
import BasePartyInvitation from './BasePartyInvitation';
import { AuthSessionStoreKey } from '../../../resources/enums';
import type ClientUser from '../user/ClientUser';
import type Friend from '../friend/Friend';
import type Client from '../../Client';
import type Party from './Party';
import type ClientParty from './ClientParty';

/**
 * Represents a sent party invitation
 */
class SentPartyInvitation extends BasePartyInvitation {
  public override sender: ClientUser;
  public override receiver: Friend;

  /**
   * @param client The main client
   * @param party The party this invitation belongs to
   * @param sender The friend (or the client user) who sent this invitation
   * @param receiver The friend (or the client user) who received this invitation
   * @param data The invitation data
   */
  constructor(client: Client, party: Party | ClientParty, sender: ClientUser, receiver: Friend, data: any) {
    super(client, party, sender, receiver, data);

    this.sender = sender;
    this.receiver = receiver;
  }

  /**
   * Declines this invitation
   * @throws {PartyInvitationExpiredError} The invitation already got accepted or declined
   */
  public async abort() {
    if (this.isExpired || this.isHandled) throw new PartyInvitationExpiredError();

    await this.client.http.epicgamesRequest({
      method: 'DELETE',
      url: `${Endpoints.BR_PARTY}/parties/${this.party.id}/invites/${this.receiver.id}`,
    }, AuthSessionStoreKey.Fortnite);

    this.isHandled = true;
  }
}

export default SentPartyInvitation;
