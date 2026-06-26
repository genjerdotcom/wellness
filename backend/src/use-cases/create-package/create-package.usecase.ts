import { Injectable, Inject } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';

@Injectable()
export class CreatePackageUseCase {
  constructor(
    @Inject('PackageRepository')
    private repository: any,
  ) {}

  execute(dto: CreatePackageDto) {
    return this.repository.create(dto);
  }
}
