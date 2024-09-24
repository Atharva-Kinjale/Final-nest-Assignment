



import { DeepPartial, Repository } from 'typeorm';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BaseService<T,createDTO extends DeepPartial<T>> {
  constructor(private readonly repository: Repository<T>,
   
    private readonly pincode:string
  ) {}

  async findAll(query): Promise<T[]> {
    // return await this.repository.find(query);
    // filtering
    const queryObj={...query}
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log("req.query", query);

    // sorting
    let sortOrder = {};
    if (query.sort) 
      {
      let sortBy = query.sort.split(",");
      console.log(sortBy);
      
      sortBy.forEach((el) => {
        if (el.startsWith("-")) {
          sortOrder[el.slice(1, el.length)]= "DESC";
          
        } else {
          sortOrder[el.slice(0, el.length)]= "ASC";
        }
      });
    } else {
      sortOrder ["CreatedAt"]= "DESC";
    }
    console.log(sortOrder);
    

    // field Limit
    let fields;
    if (query.fields) {
      fields = query.fields.split(",");
      console.log(fields);
    }


    // pagination
    const page = +query.page || 1;
    const take = +query.limit || 10;
    const skip = (page - 1) * take;

    console.log(skip,take);

    const location=await this.repository.find(
      {
        where:queryObj,
        order:sortOrder,
        select: fields,
        skip:skip,
        take:take,
      }
    );
    if (!location) {
      throw new NotFoundException(`Locations not found`);
    }
    
    return location
  }

  async findOne(id: number) {
        // return `This action returns a #${id} location`;
        const location=await this.repository.findOneBy({[this.pincode]:id} as object)
        if (!location) {
          throw new NotFoundException(`Location with pincode ${id} not found`);
        }
        return location
      }

  async create(createDTO:createDTO) {
        //     // tnx
            const queryRunner =this.repository.manager.connection.createQueryRunner();
            await queryRunner.connect();
            await queryRunner.startTransaction();
            // tnx
            try{const location=await this.repository.create(createDTO)
                const op = await queryRunner.manager.save(location);
        
              await queryRunner.commitTransaction();
              return op;
            // return this.repo.save(location);
        }
            catch(error){
                await queryRunner.rollbackTransaction();
                throw new BadRequestException('Error creating user: ' + error.message);
              } finally {
                await queryRunner.release();
              }
          }
}



// --------------------------------------------------------------------------------------------------------------------------
// import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
// // import { CreateLocationDto } from './dto/create-location.dto';
// // import { UpdateLocationDto } from './dto/update-location.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Location } from './location/entities/location.entity';
// import { CreateLocationDto } from './location/dto/create-location.dto';
// import { UpdateLocationDto } from './location/dto/update-location.dto';

// @Injectable()
// export class BasicService <T>{
//     // repo
//   constructor(
//     // repo,
//     // @InjectRepository(ENTITYNAME) private repo:Repository<ENTITYNAME>
//     private repo:Repository<T>
// ){
//     // this.repo= repo;
    
// }


// //   async create(createDto: CREATE-ENTITY-DTO) {
// //     // tnx
// //     const queryRunner =this.repo.manager.connection.createQueryRunner();
// //     await queryRunner.connect();
// //     await queryRunner.startTransaction();
// //     // tnx
// //     try{const location=await this.repo.create(createDto)
// //         const op = await queryRunner.manager.save(location);

// //       await queryRunner.commitTransaction();
// //       return op;
// //     // return this.repo.save(location);
// // }
// //     catch(error){
// //         await queryRunner.rollbackTransaction();
// //         throw new BadRequestException('Error creating user: ' + error.message);
// //       } finally {
// //         await queryRunner.release();
// //       }
// //   }

//   async findAll(query) {
//     // // return `This action returns all locations`;
//     // // filtering
//     // const queryObj={...query}
//     // const excludedFields = ["page", "sort", "limit", "fields"];
//     // excludedFields.forEach((el) => delete queryObj[el]);
//     // console.log("req.query", query);

//     // // sorting
//     // let sortOrder = {};
//     // if (query.sort) 
//     //   {
//     //   let sortBy = query.sort.split(",");
//     //   console.log(sortBy);
      
//     //   sortBy.forEach((el) => {
//     //     if (el.startsWith("-")) {
//     //       sortOrder[el.slice(1, el.length)]= "DESC";
          
//     //     } else {
//     //       sortOrder[el.slice(0, el.length)]= "ASC";
//     //     }
//     //   });
//     // } else {
//     //   sortOrder ["CreatedAt"]= "DESC";
//     // }
//     // console.log(sortOrder);
    

//     // // field Limit
//     // let fields;
//     // if (query.fields) {
//     //   fields = query.fields.split(",");
//     //   console.log(fields);
//     // }


//     // // pagination
//     // const page = +query.page || 1;
//     // const take = +query.limit || 10;
//     // const skip = (page - 1) * take;

//     // console.log(skip,take);

//     const location=await this.repo.find(
//     //   {
//     //     // where:queryObj,
//     //     order:sortOrder,
//     //     select: fields,
//     //     skip:skip,
//     //     take:take,
//     //   }
//     );
//     if (!location) {
//       throw new NotFoundException(`Locations not found`);
//     }
    
//     return location
//   }

// //   async findOne(id: number) {
// //     // return `This action returns a #${id} location`;
// //     const location=await this.repo.findOneBy({pincode:id})
// //     if (!location) {
// //       throw new NotFoundException(`Location with pincode ${id} not found`);
// //     }
// //     return location
// //   }

// //   async update(id: number, updateLocationDto: UpdateLocationDto) {
// // // tnx
// // const queryRunner = this.repo.manager.connection.createQueryRunner();
// // await queryRunner.connect();
// // await queryRunner.startTransaction();
// // // tnx
// // try {
// //     const location = await this.findOne(id);
// //     if (!location) {
// //         throw new NotFoundException(`location with ID ${id} not exiist`);
// //       }
// //       const loc=await queryRunner.manager.update(Location,id,updateLocationDto)
// //       await queryRunner.commitTransaction();
// //     return  this.repo.findOneBy({pincode :id});
// // } catch (error) {
    
// //     await queryRunner.rollbackTransaction();
// //     throw new BadRequestException('Error updating location: ' + error.message);
// //   } finally {
// //     await queryRunner.release();
// //   }
    
// //   }

// //   async remove(id: number) {
// //     // return `This action removes a #${id} location`;
// //     const queryRunner = this.repo.manager.connection.createQueryRunner();
// //     await queryRunner.connect();
// //     await queryRunner.startTransaction();
// //     try {
// //         const result=await queryRunner.manager.softDelete(Location,id)
// //         if (result.affected === 0) {
// //           throw new NotFoundException(`Location with pincode ${id} not found`);
// //         }
// //         return `pincode #${id} is removed from  location`
      
// //     } catch (error) {
// //         await queryRunner.rollbackTransaction();
// //         throw new BadRequestException('Error deleting location: ' + error.message);
// //       } finally {
// //         await queryRunner.release();
// //       }    
// //     }
   
// }


