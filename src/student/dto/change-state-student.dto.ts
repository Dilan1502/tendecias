import { PickType } from "@nestjs/swagger";

import { CreateStudentDto } from "./create-student.dto";
import { StudentDto } from "./student.dto";


export class ChangeStateStudentDto extends PickType(StudentDto, ['username', 'name']) {}


 /*metodo pacth*/