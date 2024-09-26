import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthInfoDto } from './create-auth-info.dto';

export class UpdateAuthInfoDto extends PartialType(CreateAuthInfoDto) {}
