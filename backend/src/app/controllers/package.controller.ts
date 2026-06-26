import { CreatePackageUseCase } from '@/use-cases/create-package/create-package.usecase';
import { CreatePackageDto } from '@/use-cases/create-package/dto/create-package.dto';
import { DeletePackageUseCase } from '@/use-cases/delete-package/delete-package.usecase';
import { FindPackagesUseCase } from '@/use-cases/find-package/find-package.usecase';
import { GetPackagesUseCase } from '@/use-cases/get-packages/get-packages.usecase';
import { UpdatePackageDto } from '@/use-cases/update-package/dto/update-package.dto';
import { UpdatePackageUseCase } from '@/use-cases/update-package/update-package.usecase';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Packages')
@Controller()
export class PackageController {
  constructor(
    private createPackage: CreatePackageUseCase,

    private getPackages: GetPackagesUseCase,

    private findPackage: FindPackagesUseCase,

    private updatePackage: UpdatePackageUseCase,

    private deletePackage: DeletePackageUseCase,
  ) {}

  @Get('mobile/packages')
  findMobile() {
    return this.getPackages.execute();
  }

  @Get('admin/packages')
  findAll() {
    return this.getPackages.execute();
  }

  @Get('admin/packages/:id')
  find(
    @Param('id')
    id: string,
  ) {
    return this.findPackage.execute(id);
  }

  @Post('admin/packages')
  create(
    @Body()
    dto: CreatePackageDto,
  ) {
    return this.createPackage.execute(dto);
  }

  @Put('admin/packages/:id')
  update(
    @Param('id')
    id: string,

    @Body()
    dto: UpdatePackageDto,
  ) {
    return this.updatePackage.execute(id, dto);
  }

  @Delete('admin/packages/:id')
  remove(
    @Param('id')
    id: string,
  ) {
    return this.deletePackage.execute(id);
  }
}
