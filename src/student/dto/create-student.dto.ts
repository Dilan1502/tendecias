import { IsBoolean, IsEmail, IsNotEmpty, MinLength} from "class-validator";


export class CreateStudentDto {
    @IsEmail(
      {},
      {message:"Debe ser un email vailidoooo",},
    )
    email: string;
  
    @MinLength(2)
    name: string;

    @IsNotEmpty()
    phone: string;

    @IsBoolean()
    state: boolean;

  }