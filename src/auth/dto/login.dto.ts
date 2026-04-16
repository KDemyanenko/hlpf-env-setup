import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Введіть коректний email' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Пароль не може бути порожнім' })
  password: string;
}