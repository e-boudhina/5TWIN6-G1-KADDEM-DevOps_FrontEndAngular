import { User } from './user.model';

export class Post {
  id: number;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  user: User;
}
