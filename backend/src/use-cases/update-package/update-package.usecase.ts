import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { WellnessPackageRepository } from '@/domain/repositories/wellness-package.repository';
import { UpdatePackageDto } from './dto/update-package.dto';

@Injectable()
export class UpdatePackageUseCase {
  constructor(
    @Inject('PackageRepository')
    private repository: WellnessPackageRepository,
  ) {}

  async execute(id: string, dto: UpdatePackageDto) {
    const existingPackage = await this.repository.findById(id);

    if (!existingPackage) {
      throw new NotFoundException('Package not found');
    }

    return this.repository.update(id, dto);
  }
}
