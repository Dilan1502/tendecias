import { PickType } from "@nestjs/swagger";

import { CreateStudentDto } from "./create-student.dto";
import { IsString } from "class-validator";


export class ChangeState2StudentDto extends PickType(CreateStudentDto, ['name']) {
    @IsString()
    state: string;

    @IsString()
    lastname: string;
}


 /*metodo pacth*/