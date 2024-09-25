import { GetAuthorArgs } from './dto/get-author.args';
import { Author } from './models/author.model';

export class AuthorsService {
  async findOneById(args: GetAuthorArgs): Promise<Author> {
    return {
      id: 1,
      firstName: 'reza',
      lastName: 'khorrami',
      posts: [],
    };
  }
}
