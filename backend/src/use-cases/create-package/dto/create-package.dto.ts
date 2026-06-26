import { IsString, IsNumber, Min } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePackageDto {
  @ApiProperty({
    example: 'Ginanjar Package',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'Morning Ginanjar Session',
  })
  @IsString()
  description!: string;

  @ApiProperty({
    example: 150000,
  })
  @IsNumber()
  @Min(1)
  price!: number;

  @ApiProperty({
    example: 60,
  })
  @IsNumber()
  @Min(1)
  duration_minutes!: number;
}
