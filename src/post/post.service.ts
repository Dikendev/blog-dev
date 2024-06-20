import { Injectable } from '@nestjs/common';
import { PostRepository } from './repository/post-repository';
import { PostDto } from './dto/post-dto';

@Injectable()
export class PostService implements PostRepository {
  create(post: PostDto): Promise<string> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<PostDto[]> {
    throw new Error('Method not implemented.');
  }
}
