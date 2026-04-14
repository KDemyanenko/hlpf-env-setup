import {
  IsString,
  IsNumber,
  IsOptional,
  IsInt,
  Min,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2, { message: 'Назва товару має бути не коротшою за 2 символи' })
  @MaxLength(255)
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Ціна має бути числом з макс. 2 знаками після коми' })
  @Min(0.01, { message: 'Ціна не може бути меншою за 0.01' })
  price: number;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsInt({ message: 'Кількість має бути цілим числом' })
  @Min(0, { message: 'Кількість не може бути від’ємною' })
  stock?: number;

  @IsOptional()
  @IsInt({ message: 'ID категорії має бути цілим числом' })
  categoryId?: number;
}