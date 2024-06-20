import { PostDto } from '../dto/post-dto';

export abstract class PostRepository {
  abstract create(post: PostDto): Promise<string>;
  abstract list(): Promise<PostDto[]>;
}
