// // import { Injectable, NotFoundException } from '@nestjs/common';
// // import { CreateLocationDto } from './dto/create-location.dto';
// // import { UpdateLocationDto } from './dto/update-location.dto';
// // import { InjectRepository } from '@nestjs/typeorm';
// // import { Location } from './entities/location.entity';
// // import { Repository } from 'typeorm';

// // @Injectable()
// // export class LocationService {
// //   constructor(@InjectRepository(Location) private repo:Repository<Location>){}
//   // async create(createLocationDto: CreateLocationDto) {
//   //   const location=await this.repo.create(createLocationDto)
//   //   return this.repo.save(location);
//   // }

// //   async findAll(query) {
// //     // return `This action returns all locations`;
// //     // filtering
// //     const queryObj={...query}
// //     const excludedFields = ["page", "sort", "limit", "fields"];
// //     excludedFields.forEach((el) => delete queryObj[el]);
// //     console.log("req.query", query);

// //     // sorting
// //     let sortOrder = {};
// //     if (query.sort) 
// //       {
// //       let sortBy = query.sort.split(",");
// //       console.log(sortBy);
      
// //       sortBy.forEach((el) => {
// //         if (el.startsWith("-")) {
// //           sortOrder[el.slice(1, el.length)]= "DESC";
          
// //         } else {
// //           sortOrder[el.slice(0, el.length)]= "ASC";
// //         }
// //       });
// //     } else {
// //       sortOrder ["CreatedAt"]= "DESC";
// //     }
// //     console.log(sortOrder);
    

// //     // field Limit
// //     let fields;
// //     if (query.fields) {
// //       fields = query.fields.split(",");
// //       console.log(fields);
// //     }


// //     // pagination
// //     const page = +query.page || 1;
// //     const take = +query.limit || 10;
// //     const skip = (page - 1) * take;

// //     console.log(skip,take);

// //     const location=await this.repo.find(
// //       {
// //         // where:queryObj,
// //         order:sortOrder,
// //         select: fields,
// //         skip:skip,
// //         take:take,
// //       }
// //     );
// //     if (!location) {
// //       throw new NotFoundException(`Locations not found`);
// //     }
    
// //     return location
// //   }

// //   async findOne(id: number) {
// //     // return `This action returns a #${id} location`;
// //     const location=await this.repo.findOneBy({pincode:id})
// //     if (!location) {
// //       throw new NotFoundException(`Location with pincode ${id} not found`);
// //     }
// //     return location
// //   }

// //   async update(id: number, updateLocationDto: UpdateLocationDto) {

// //     const location=await this.repo.update(id,updateLocationDto)
// //     return  this.repo.findOneBy({pincode :id});
// //   }

// //   async remove(id: number) {
// //     // return `This action removes a #${id} location`;
// //     const result=await this.repo.softDelete(id)
// //     if (result.affected === 0) {
// //       throw new NotFoundException(`Location with pincode ${id} not found`);
// //     }
// //     return `pincode #${id} is removed from  location`
// //   }
// // }



// // // transaction code
// // import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
// // // import { CreateLocationDto } from './dto/create-location.dto';
// // // import { UpdateLocationDto } from './dto/update-location.dto';
// // import { InjectRepository } from '@nestjs/typeorm';
// // import { Repository } from 'typeorm';
// // import { CreateLocationDto } from './dto/create-location.dto';
// // import { Location } from './entities/location.entity';
// // import { UpdateLocationDto } from './dto/update-location.dto';

// // @Injectable()
// // export class LocationService {
// //   constructor(@InjectRepository(Location) private repo:Repository<Location>){}


// //   async create(createLocationDto: CreateLocationDto) {
// //     // tnx
// //     const queryRunner = this.repo.manager.connection.createQueryRunner();
// //     await queryRunner.connect();
// //     await queryRunner.startTransaction();
// //     // tnx
// //     try{const location=await this.repo.create(createLocationDto)
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

// //   async findAll(query) {
// //     // return `This action returns all locations`;
// //     // filtering
// //     const queryObj={...query}
// //     const excludedFields = ["page", "sort", "limit", "fields"];
// //     excludedFields.forEach((el) => delete queryObj[el]);
// //     console.log("req.query", query);

// //     // sorting
// //     let sortOrder = {};
// //     if (query.sort) 
// //       {
// //       let sortBy = query.sort.split(",");
// //       console.log(sortBy);
      
// //       sortBy.forEach((el) => {
// //         if (el.startsWith("-")) {
// //           sortOrder[el.slice(1, el.length)]= "DESC";
          
// //         } else {
// //           sortOrder[el.slice(0, el.length)]= "ASC";
// //         }
// //       });
// //     } else {
// //       sortOrder ["CreatedAt"]= "DESC";
// //     }
// //     console.log(sortOrder);
    

// //     // field Limit
// //     let fields;
// //     if (query.fields) {
// //       fields = query.fields.split(",");
// //       console.log(fields);
// //     }


// //     // pagination
// //     const page = +query.page || 1;
// //     const take = +query.limit || 10;
// //     const skip = (page - 1) * take;

// //     console.log(skip,take);

// //     const location=await this.repo.find(
// //       {
// //         // where:queryObj,
// //         order:sortOrder,
// //         select: fields,
// //         skip:skip,
// //         take:take,
// //       }
// //     );
// //     if (!location) {
// //       throw new NotFoundException(`Locations not found`);
// //     }
    
// //     return location
// //   }

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
   
// // }



// // --------------------------------------------------------------------------------------------------------
// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateLocationDto } from './dto/create-location.dto';
// import { UpdateLocationDto } from './dto/update-location.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Location } from './entities/location.entity';
// import { Repository } from 'typeorm';
// import { BasicService } from 'src/BaseService';

// @Injectable()
// export class LocationService extends BasicService<Location> {
//   // repo: any;
//   constructor(@InjectRepository(Location) private repo:Repository<Location>){
//     // this.repo=repo;
//     super(repo)
//   }
//   // async create(createLocationDto: CreateLocationDto) {
//   //   // const location=await this.repo.create(createLocationDto)
//   //   // return this.repo.save(location);
//   // }

//   // async findAll(query) {
//   //   // // return `This action returns all locations`;
//   //   // // filtering
//   //   // const queryObj={...query}
//   //   // const excludedFields = ["page", "sort", "limit", "fields"];
//   //   // excludedFields.forEach((el) => delete queryObj[el]);
//   //   // console.log("req.query", query);

//   //   // // sorting
//   //   // let sortOrder = {};
//   //   // if (query.sort) 
//   //   //   {
//   //   //   let sortBy = query.sort.split(",");
//   //   //   console.log(sortBy);
      
//   //   //   sortBy.forEach((el) => {
//   //   //     if (el.startsWith("-")) {
//   //   //       sortOrder[el.slice(1, el.length)]= "DESC";
          
//   //   //     } else {
//   //   //       sortOrder[el.slice(0, el.length)]= "ASC";
//   //   //     }
//   //   //   });
//   //   // } else {
//   //   //   sortOrder ["CreatedAt"]= "DESC";
//   //   // }
//   //   // console.log(sortOrder);
    

//   //   // // field Limit
//   //   // let fields;
//   //   // if (query.fields) {
//   //   //   fields = query.fields.split(",");
//   //   //   console.log(fields);
//   //   // }


//   //   // // pagination
//   //   // const page = +query.page || 1;
//   //   // const take = +query.limit || 10;
//   //   // const skip = (page - 1) * take;

//   //   // console.log(skip,take);

//   //   // const location=await this.repo.find(
//   //   //   {
//   //   //     // where:queryObj,
//   //   //     order:sortOrder,
//   //   //     select: fields,
//   //   //     skip:skip,
//   //   //     take:take,
//   //   //   }
//   //   // );
//   //   // if (!location) {
//   //   //   throw new NotFoundException(`Locations not found`);
//   //   // }
    
//   //   // return location
//   // }
//   // async findOne(id: number) {
//   //       // return `This action returns a #${id} location`;
//   //       // const location=await this.repo.findOneBy({pincode:id})
//   //       // if (!location) {
//   //       //   throw new NotFoundException(`Location with pincode ${id} not found`);
//   //       // }
//   //       // return location
//   //     }
//   //     async update(id: number, updateLocationDto: UpdateLocationDto) {
//   //     }
//   //     async remove(id: number) {
//   //     }
    
// }
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/BaseService";
import { Location } from "./entities/location.entity";
import { Repository } from "typeorm";
import { CreateLocationDto } from "./dto/create-location.dto";
export class LocationService extends BaseService<Location,CreateLocationDto> {
  
  constructor(@InjectRepository(Location) private readonly repo:Repository<Location> ){
    super(repo,"pincode")
  }
}