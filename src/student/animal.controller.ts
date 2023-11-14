import { Controller, Get, Post, Delete, Put, Patch, Param, Body, Query, ParseIntPipe } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AnimalDto } from "./dto/animal.dto";
import { UpdateAnimalDto } from "./dto/update-animal.dto";
import { ChangeStateAnimalDto } from "./dto/change-state-animal.dto";
import { ChangeState2AnimalDto } from "./dto/change-state2-animal.dto";
import { AnimalServices } from "./animal.services";
import { CreateAnimalDto } from "./dto/create-animal.dto";
@ApiTags('Student')
@Controller('student')
export class AnimalController {
    constructor(private readonly studentsService:AnimalServices){
    }

    //GET
    @ApiOperation({ description: "find student", summary: "find student", })
    @Get()
    async find() {
        return await this.studentsService.find()
    }
      
//POST VALIDADOOOOOO
@ApiOperation({ description: "Create student", summary: "Create student", })
@Post()
async create(@Body() payload: CreateAnimalDto) {
    return await this.studentsService.create(payload);
}

//GET One
@ApiOperation({ description: "find One student", summary: "find One student", })
@Get(':id')
async findOne(@Param('id') id: number) {
    return await this.studentsService.findOne(id);
}

//PUT-UPDATE VALIDADOOOO
@ApiOperation({ description: "update student", summary: "update student", })
@Put(':id')
async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateAnimalDto) {
    return await this.studentsService.update(id,payload);
}
    
//PATCH ya esta
    @ApiOperation({description:"description",summary:"change student",   })
    @Patch(':id')
    changeState(@Param('id', ParseIntPipe) id: number, @Body() payload:ChangeState2AnimalDto){
        return {id, body: payload};
    }

//DELETE
@ApiOperation({ description: "delete student", summary: "delete student", })
@Delete(':id')
async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.studentsService.delete(id);
}
}