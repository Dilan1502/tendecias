import { Injectable, NotFoundException } from "@nestjs/common";
import { AnimalEntity } from "./animal.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAnimalDto } from "./dto/create-animal.dto";
import { UpdateAnimalDto } from "./dto/update-animal.dto";


@Injectable()
export class AnimalServices {


    constructor(@InjectRepository(AnimalEntity) 
    private animalsRepository: Repository<AnimalEntity>,
    ){}

    async find(){
        const animals = await this.animalsRepository.find();

        return animals;
    }

    async findOne(id:number){
        const animal:AnimalEntity = await this.animalsRepository.findOne({
            where:{id:id}
        });
        
        return animal;
    }

    async create (payload  : CreateAnimalDto){
        const newAnimal:AnimalEntity = this.animalsRepository.create();
        
        newAnimal.age = payload.age;
        newAnimal.clasification = payload.clasification;
        newAnimal.gender = payload.gender;
        newAnimal.id = payload.id;
        newAnimal.name = payload.name;
        newAnimal.race = payload.race;
        newAnimal.size = payload.size;
        newAnimal.specie = payload.specie;

        const response = await this.animalsRepository.save(newAnimal);

        return response;    
    }


    async update (id: number , payload  : UpdateAnimalDto){
        const animal:AnimalEntity = await this.findOne(id);
        if(!animal){
            throw new  NotFoundException({
                message: " animal no encontrado",
                error: "no encontrado"
            });
        }
        animal.age = payload.age;
        animal.clasification = payload.clasification;
        animal.gender = payload.gender;
        animal.id = payload.id;
        animal.name = payload.name;
        animal.race = payload.race;
        animal.size = payload.size;
        animal.specie = payload.specie;

        const response = await this.animalsRepository.update(id, animal);

        return response;    
    }


    async delete (id: number){
        const animal:AnimalEntity = await this.findOne(id);
        
        if(!animal){
            throw new  NotFoundException({
                message: " no encontrado",
                error: "no encontrado"
            });
        }

        return await this.animalsRepository.delete(id)   
    }


}