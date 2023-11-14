import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("user")
@Controller('user')
export class UserController {
    @ApiOperation({
        description: "hola mundo",
        summary: "obtiene elementos"
    })
    @Get("dilan")
    get(){
        return "haro";
    }



    @ApiOperation({
        description: "hola mundo",
        summary: "agrega elementos"
    })
    @Post("dilan")
    posts(){
        return "hola";
    }



    @ApiOperation({
        description: "hola mundo",
        summary: "editar"
    })
    @Put("dilan")
    put(){
        return "dilan";
    }


    
    @ApiOperation({
        description: "hola mundo",
        summary: "eliminar"
    })
    @Delete("dilan")
    delete(){
        return "dilan";
    }
}