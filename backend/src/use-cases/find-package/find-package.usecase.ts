import { Inject, Injectable } from '@nestjs/common';

import { WellnessPackageRepository } from '@/domain/repositories/wellness-package.repository';

@Injectable()
export class FindPackagesUseCase {
  constructor(
    @Inject('PackageRepository')
    private repository: WellnessPackageRepository,
  ) {}

  async execute(id: string) {
    return this.repository.findById(id);
  }
}
