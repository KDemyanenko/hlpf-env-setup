import { IsString, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MinLength(2, { message: 'Назва занадто коротка (мін. 2 символи)' })
  @MaxLength(100, { message: 'Назва занадто довга (макс. 100 символів)' })
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'Опис не може перевищувати 500 символів' })
  description?: string;
}