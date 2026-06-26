import { PackageController } from '@/app/controllers/package.controller';
import { PrismaService } from '@/infrastructure/database/prisma/prisma.service';
import { PrismaPackageRepository } from '@/infrastructure/database/prisma/wellness-package.repository';
import { CreatePackageUseCase } from '@/use-cases/create-package/create-package.usecase';
import { DeletePackageUseCase } from '@/use-cases/delete-package/delete-package.usecase';
import { FindPackagesUseCase } from '@/use-cases/find-package/find-package.usecase';
import { GetPackagesUseCase } from '@/use-cases/get-packages/get-packages.usecase';
import { UpdatePackageUseCase } from '@/use-cases/update-package/update-package.usecase';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';

@Module({
  controllers: [PackageController],

  providers: [
    PrismaService,

    CreatePackageUseCase,
    FindPackagesUseCase,
    GetPackagesUseCase,
    UpdatePackageUseCase,
    DeletePackageUseCase,

    {
      provide: 'PackageRepository',

      useClass: PrismaPackageRepository,
    },
  ],
})
export class PackageModule {}
