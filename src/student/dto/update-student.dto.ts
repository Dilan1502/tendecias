import { IsEmail, IsNumber, IsOptional, MaxLength, MinLength } from "class-validator";
import { minLengthValidationOption } from "src/common/validation-dto";

export class UpdateStudentDto {
  @IsEmail({}, { message: "El campo email debe ser un correo válido" })
  email: string;

  @MinLength(2, { message: "El campo name debe tener al menos 2 caracteres :)" })
  @MaxLength(5, { message: "El campo name debe tener un máximo de 5 caracteres :)" })
  name: string;

  @IsOptional()
  @MinLength(10, { message: "El campo phone debe tener al menos 10 caracteres" })
  @MaxLength(10, { message: "El campo phone debe tener un máximo de 10 caracteres" })
  phone: string;

  @MinLength(1, minLengthValidationOption())
  age: number;

  @IsOptional()
  @MinLength(10, { message: "El campo address debe tener al menos 10 caracteres" })
  @MaxLength(15, { message: "El campo address debe tener un máximo de 15 caracteres" })
  address: string;

  @IsOptional()
  @IsNumber({}, { message: "El campo score debe ser un número válido" })
  score: number;
}


    /*metodo put */