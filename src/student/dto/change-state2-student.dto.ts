import { PickType } from "@nestjs/swagger";

import { IsString } from "class-validator";
import { StudentDto } from "./student.dto";


export class ChangeState2StudentDto extends PickType(StudentDto, ['name']) {
    @IsString()
    state: string;

    @IsString()
    lastname: string;
}


 /*metodo pacth*/