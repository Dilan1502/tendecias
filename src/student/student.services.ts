import { Injectable, NotFoundException } from "@nestjs/common";
import { StudentEntity } from "./student.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";


@Injectable()
export class StudentServices {


    constructor(@InjectRepository(StudentEntity) 
    private studentsRepository: Repository<StudentEntity>,
    ){}

    async find(){
        const students = await this.studentsRepository.find();

        return students;
    }

    async findOne(id:number){
        const student:StudentEntity = await this.studentsRepository.findOne({
            where:{id:id}
        });
        
        return student;
    }

    async create (payload  : CreateStudentDto){
        const newStudent:StudentEntity = this.studentsRepository.create();
        
        newStudent.age = payload.age;
        newStudent.clasification = payload.clasification;
        newStudent.gender = payload.gender;
        newStudent.id = payload.id;
        newStudent.name = payload.name;
        newStudent.race = payload.race;
        newStudent.size = payload.size;
        newStudent.specie = payload.specie;

        const response = await this.studentsRepository.save(newStudent);

        return response;    
    }


    async update (id: number , payload  : UpdateStudentDto){
        const student:StudentEntity = await this.findOne(id);
        if(!student){
            throw new  NotFoundException({
                message: " no encontrado",
                error: "no encontrado"
            });
        }
        student.age = payload.age;
        student.clasification = payload.clasification;
        student.gender = payload.gender;
        student.id = payload.id;
        student.name = payload.name;
        student.race = payload.race;
        student.size = payload.size;
       student.specie = payload.specie;

        const response = await this.studentsRepository.update(id, student);

        return response;    
    }


    async delete (id: number){
        const student:StudentEntity = await this.findOne(id);
        
        if(!student){
            throw new  NotFoundException({
                message: " no encontrado",
                error: "no encontrado"
            });
        }

        return await this.studentsRepository.delete(id)   
    }


}