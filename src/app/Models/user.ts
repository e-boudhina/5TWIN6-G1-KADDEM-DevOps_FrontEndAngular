import { Trade } from './trade'; // Import the Trade model if you have it defined

export class User {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  age?: number;
  address?: string;
  phonenumber?: string;
  trades?: Trade[];


}
