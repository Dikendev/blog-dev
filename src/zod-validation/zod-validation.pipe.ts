import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema<any>) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const parse = this.schema.safeParse(value);
    if (parse.success) return parse.data;
    throw new BadRequestException(parse.error.errors);
  }
}
