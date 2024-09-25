import { Post } from './models/post.model';

export class PostsService {
  async findAll(payload: { authorId: number }): Promise<Post> {
    return {
      id: 1,
      title: 'Game',
      votes: 1,
    };
  }
}
