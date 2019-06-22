import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

export function getOrmConfig(settings: any): TypeOrmModuleOptions {
  const NEST_ENV = process.env.NEST_ENV;
  // console.log('NEST_ENV', NEST_ENV);
  if (NEST_ENV === 'dev'){
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjsrealworld',
      entities: ['src/**/**.entity{.js,.ts}'],
      synchronize: true,
    };
  } else {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjsrealworld',
      entities: ['**/**.entity.js'],
      synchronize: true,
    };
  }
}

export class DatabaseModule {
  public static forRoot(settings: any): DynamicModule {
    const ormConfig = getOrmConfig(settings);
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRoot(ormConfig),
      ],
    };
  }
}
