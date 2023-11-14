import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsString, IsDate, MaxDate } from "class-validator";

export class ChangeStateStudentDto {
  @IsBoolean()
  state: boolean;

  @IsString({ message: "El campo firstName debe ser una cadena válida" })
  firstName: string;

  @IsString({ message: "El campo lastName debe ser una cadena válida" })
  lastName: string;

  @IsDate()
  @Type( () => Date )
  @MaxDate( () => new Date("2020-02-15"))
  birthdate:Date;

  @IsNumber({}, { message: "El campo studentId debe ser un número válido" })
  studentId: number;
}


    /*metodo pacth*/