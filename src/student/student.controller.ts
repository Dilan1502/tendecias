import { Controller, Get, Post, Delete, Put, Patch, Param, Body, Query, ParseIntPipe } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { StudentDto } from "./dto/student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { ChangeStateStudentDto } from "./dto/change-state-student.dto";
import { ChangeState2StudentDto } from "./dto/change-state2-student.dto";
import { StudentServices } from "./student.services";
import { CreateStudentDto } from "./dto/create-student.dto";
@ApiTags('Student')
@Controller('student')
export class StudentController {
    constructor(private readonly studentsService:StudentServices){
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
async create(@Body() payload: CreateStudentDto) {
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
async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateStudentDto) {
    return await this.studentsService.update(id,payload);
}
    
//PATCH ya esta
    @ApiOperation({description:"description",summary:"change student",   })
    @Patch(':id')
    changeState(@Param('id', ParseIntPipe) id: number, @Body() payload:ChangeState2StudentDto){
        return {id, body: payload};
    }

//DELETE
@ApiOperation({ description: "delete student", summary: "delete student", })
@Delete(':id')
async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.studentsService.delete(id);
}
}