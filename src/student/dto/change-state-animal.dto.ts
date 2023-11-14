import { PickType } from "@nestjs/swagger";

import { CreateAnimalDto} from "./create-animal.dto";
import { AnimalDto } from "./animal.dto";


export class ChangeStateAnimalDto extends PickType(AnimalDto, ['username', 'name']) {}


 /*metodo pacth*/