import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export enum PostType {
  POST = 'post',
  PAGE = 'page',
  STORY = 'story',
  SERIES = 'series',
}

export enum PostStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  REVIEW = 'review',
  PUBLISHED = 'published',
}

export class MetaOptionsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  key!: string;

  @ApiProperty()
  @IsNotEmpty()
  value!: any;
}

export class CreatePostDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty()
  @IsEnum(PostType)
  @IsNotEmpty()
  postType!: PostType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  slug!: string;

  @ApiProperty()
  @IsEnum(PostType)
  @IsNotEmpty()
  status!: PostType;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  featuredImageUrl?: string;

  @ApiProperty()
  @IsISO8601()
  @IsNotEmpty()
  publishOn!: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags!: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MetaOptionsDTO)
  metaOptions!: MetaOptionsDTO;
}
