import { IsEmail, MaxLength, MinLength } from "class-validator";

export class AnimalDto {
  @IsEmail(
    {},
    { message: "El campo email debe ser un correo válido" }
  )
  email: string;

  @MinLength(2, { message: "El campo name debe tener al menos 2 caracteres :)" })
  @MaxLength(5, { message: "El campo name debe tener un máximo de 5 caracteres :)" })
  name: string;

  @MinLength(6, { message: "El campo username debe tener al menos 6 caracteres :)" })
  @MaxLength(15, { message: "El campo username debe tener un máximo de 15 caracteres :)" })
  username: string;

  @MinLength(8, { message: "El campo password debe tener al menos 8 caracteres :)" })
  @MaxLength(20, { message: "El campo password debe tener un máximo de 20 caracteres :)" })
  password: string;

  @MinLength(10, { message: "El campo dirección debe tener al menos 10 caracteres :)" })
  @MaxLength(20, { message: "El campo dirección debe tener un máximo de 20 caracteres :)" })
  direccion: string;
}


  /*metodo post*/