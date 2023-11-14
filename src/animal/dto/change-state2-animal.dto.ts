import { PickType } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { AnimalDto } from "./animal.dto";


export class ChangeState2AnimalDto extends PickType(AnimalDto, ['name']) {
    @IsString()
    state: string;

    @IsString()
    lastname: string;
}


 /*metodo pacth*/