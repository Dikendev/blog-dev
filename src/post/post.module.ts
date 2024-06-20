import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [PostService],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
