import { Controller, Get, Post, Delete, Put, Patch, Param, Body, Query, ParseIntPipe } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { StudentDto } from "./dto/student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { ChangeStateStudentDto } from "./dto/change-state-student.dto";
@ApiTags('Student')
@Controller('student')
export class StudentController {

    //GET
    @ApiOperation({description:"description",summary:"find student", })
    @Get()
    get(@Query() query: any){
        return query;
    } 
      
//POST VALIDADOOOOOO
    @ApiOperation({description:"description", summary:"Create student",})
    @Post()
    create(@Body() payload: StudentDto){
        return payload;
    }

//GET One
@ApiOperation({ description:"description",summary:"find student",})
@Get(':id')
findOne(@Param('id') id: number){
    return id;
}

//PUT-UPDATE VALIDADOOOO
    @ApiOperation({ description:"description", summary:"update student",    })
    @Put(':id')
    update(@Param ('id' ,ParseIntPipe) id: number, @Body() payload:UpdateStudentDto){
        return {id, body:payload};
    }
    
//PATCH ya esta
    @ApiOperation({description:"description",summary:"change student",   })
    @Patch(':id')
    changeState(@Param('id', ParseIntPipe) id: number, @Body() payload:ChangeStateStudentDto){
        return {id, body: payload};
    }

//DELETE
    @ApiOperation({ description:"description", summary:"delete student",   })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number){
        return 'this info was delete ${id}';
    }
}