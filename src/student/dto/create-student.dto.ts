import { IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";


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

    @IsString()
    bloodType: string;
    age: number;
    clasification: string;
    gender: string;
    id: number;
    race: string;
    size: number;
    specie: string;

  }