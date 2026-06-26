import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infrastructure/database/prisma/prisma.service';
import { WellnessPackage } from '@/domain/entities/wellness-package.entity';
import { WellnessPackageRepository } from '@/domain/repositories/wellness-package.repository';

@Injectable()
export class PrismaPackageRepository implements WellnessPackageRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.wellnessPackage.findMany();
  }

  findById(id: string) {
    return this.prisma.wellnessPackage.findUnique({
      where: { id },
    });
  }

  create(data: Omit<WellnessPackage, 'id'>) {
    return this.prisma.wellnessPackage.create({
      data,
    });
  }

  update(id: string, data: Partial<WellnessPackage>) {
    return this.prisma.wellnessPackage.update({
      where: { id },

      data,
    });
  }

  async delete(id: string) {
    await this.prisma.wellnessPackage.delete({
      where: { id },
    });
  }
}
