import { DeepPartial, getRepository, Repository } from 'typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
const APIFeatures = require("../src/APIFeatures");

@Injectable()
export class BaseService<T, createDTO extends DeepPartial<T>,updateDTO extends QueryDeepPartialEntity<T> >{
  constructor(
    private readonly repository: Repository<T>,
    private readonly PK: string,
    private readonly relations:string[]
  ) {}
  getEntityname(): string {
    const EntityName =
      typeof this.repository.target === 'function'
        ? this.repository.target.name
        : this.repository.target;
    console.log(this.repository);

    return EntityName as string;
  }

  async findAll(query): Promise<T[]> {
    const Features = new APIFeatures(query,this.repository);
    console.log("testing ",Features.filtering());
    
    // console.log(this.repository.metadata.columns.map(column => column.propertyName));
    // Features.checkColumnNames();
    let data;
    
  //  try {
     data = await this.repository.find({
      where: Features.filtering(),
      order: Features.Sorting(),
      select: Features.fieldLimit(),
      skip: Features.pagination().skip,
      take: Features.pagination().take,
      // relations:this.relations
    });
  //  } catch (error) {
  //   throw new NotFoundException("Bad Request");
  //  }
    if (!data) {
      throw new NotFoundException(`${this.getEntityname()} not found`);
    }
    // this.getEntityname();
    return data;
  }
  
  async findAllDetails(query): Promise<T[]> {
    const Features = new APIFeatures(query);
    // console.log("testing ",Features.filtering());
  
    const data = await this.repository.find({
      where: Features.filtering(),
      order: Features.Sorting(),
      select: Features.fieldLimit(),
      skip: Features.pagination().skip,
      take: Features.pagination().take,
      relations:this.relations
    });
    if (!data) {
      throw new NotFoundException(`${this.getEntityname()} not found`);
    }
    // this.getEntityname();
    return data;
  }

  async findOne(id: number) {
    // return `This action returns a #${id} location`;
    const data = await this.repository.findOne({
      where:{[this.PK]: id}as object,
      relations:this.relations} );
    if (!data) {
      console.log(this.repository.target);

      throw new NotFoundException(
        `${this.getEntityname()} with ${this.PK} ${id} not found`,
      );
    }
    return data;
  }

  async create(createDTO: createDTO) {
    //     // tnx
    const queryRunner = this.repository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    // tnx
    try {
      const entry = await this.repository.create(createDTO);
      const data = await queryRunner.manager.save(entry);
      await queryRunner.commitTransaction();
      return data;
      // return this.repo.save(location);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(
        `Error creating ${this.getEntityname()}: ` + error.message,
      );
    } finally {
      await queryRunner.release();
    }
  }

  async update(id: number, updateDto: updateDTO) {
    // tnx
    const queryRunner = this.repository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    // tnx
    try {
      const entry = await this.findOne(id);
      if (!entry) {
        throw new NotFoundException(`${this.getEntityname()} with ${this.PK} ${id} not exiist`);
      }
      const loc = await queryRunner.manager.update(
        this.repository.target,
        id,
        updateDto as any,
      );
      
      await queryRunner.commitTransaction();
      return this.findOne( id );
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(
        'Error updating location: ' + error.message,
      );
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number) {
    // return `This action removes a #${id} location`;
    const queryRunner = this.repository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
        const result=await queryRunner.manager.softDelete(this.repository.target,id)
        if (result.affected === 0) {
          throw new NotFoundException(`${this.getEntityname()} with ${this.PK} ${id} not found`);
        }
        return `${this.PK} #${id} is removed from  ${this.getEntityname()}`

    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw new BadRequestException(`Error deleting ${this.getEntityname()}: ` + error.message);
      } finally {
        await queryRunner.release();
      }
    }
}