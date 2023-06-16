import { Type } from 'class-transformer';
import { IsOptional, IsPositive, IsString } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  readonly limit: number;

  @IsPositive()
  @IsOptional()
  readonly offset: number;
}
