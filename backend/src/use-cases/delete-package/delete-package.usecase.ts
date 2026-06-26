import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { WellnessPackageRepository } from '@/domain/repositories/wellness-package.repository';

@Injectable()
export class DeletePackageUseCase {
  constructor(
    @Inject('PackageRepository')
    private repository: WellnessPackageRepository,
  ) {}

  async execute(id: string) {
    const existingPackage = await this.repository.findById(id);

    if (!existingPackage) {
      throw new NotFoundException('Package not found');
    }

    await this.repository.delete(id);

    return {
      success: true,
      message: 'Package deleted',
    };
  }
}
