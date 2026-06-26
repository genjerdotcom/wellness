import { PartialType } from '@nestjs/swagger';

import { CreatePackageDto } from '@/use-cases/create-package/dto/create-package.dto';

export class UpdatePackageDto extends PartialType(CreatePackageDto) {}
