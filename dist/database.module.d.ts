import { DynamicModule } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare function getOrmConfig(settings: any): TypeOrmModuleOptions;
export declare class DatabaseModule {
    static forRoot(settings: any): DynamicModule;
}
