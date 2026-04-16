import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Некоректний формат email' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Пароль має бути не менше 8 символів' })
  @MaxLength(128, { message: 'Пароль занадто довгий' })
  password: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;
}