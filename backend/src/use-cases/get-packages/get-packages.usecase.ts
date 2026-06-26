import { Inject, Injectable } from '@nestjs/common';

import { WellnessPackageRepository } from '@/domain/repositories/wellness-package.repository';

@Injectable()
export class GetPackagesUseCase {
  constructor(
    @Inject('PackageRepository')
    private repository: WellnessPackageRepository,
  ) {}

  async execute() {
    return this.repository.findAll();
  }
}
