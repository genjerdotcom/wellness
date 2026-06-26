import { WellnessPackage } from '@/domain/entities/wellness-package.entity';

export abstract class WellnessPackageRepository {
  abstract findAll(): Promise<WellnessPackage[]>;

  abstract findById(id: string): Promise<WellnessPackage | null>;

  abstract create(data: WellnessPackage): Promise<WellnessPackage>;

  abstract update(
    id: string,
    data: Partial<WellnessPackage>,
  ): Promise<WellnessPackage>;

  abstract delete(id: string): Promise<void>;
}
