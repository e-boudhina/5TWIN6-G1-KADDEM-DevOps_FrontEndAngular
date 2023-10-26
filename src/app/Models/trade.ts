import { Item } from './item'; // Import the Item model if you have it defined
import { User } from './user'; // Import the User model if you have it defined

export class Trade {
  id?: number;
  tradeStartDate?: Date;
  tradeEndDate?: Date;
  status?: Status; // Make sure 'Status' is imported or defined

  offeredItem?: Item; // Assuming 'Item' is a defined model
  user?: User; // Assuming 'User' is a defined model
  requestedItem?: Item;


}

enum Status {

  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}
