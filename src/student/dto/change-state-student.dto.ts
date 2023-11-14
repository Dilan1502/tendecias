import { PickType } from "@nestjs/swagger";

import { CreateStudentDto } from "./create-student.dto";


export class ChangeStateStudentDto extends PickType(CreateStudentDto, ['state', 'name']) {}


 /*metodo pacth*/