import { Args, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { PostsService } from '../posts/posts.service';
import { Author } from './models/author.model';
import { Post } from '../posts/models/post.model';
import { GetAuthorArgs } from './dto/get-author.args';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) {}

  // NOTE: Inline args call
  // @Query((returns) => Author, { name: 'author' })
  // async getAuthor(
  //   @Args('id', { type: () => Int }) id: number,
  // ): Promise<Author> {
  //   return await this.authorsService.findOneById(id);
  // }

  // NOTE: Dedicated arguments class
  @Query((returns) => Author, { name: 'author' })
  async getAuthor(@Args() args: GetAuthorArgs): Promise<Author> {
    return await this.authorsService.findOneById(args);
  }

  @ResolveField('posts', (returns) => [Post])
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
