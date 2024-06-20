export class PostDto {
  title: string;
  subTitle: string;
  content: string;
  contentBlocks: ContentBlocks;
}

export class ContentBlocks {
  type: string;
  content: string;
  blockOrder: number;
}
