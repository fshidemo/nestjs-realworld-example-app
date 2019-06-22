"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
function getOrmConfig(settings) {
    const NEST_ENV = process.env.NEST_ENV;
    if (NEST_ENV === 'dev') {
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
    }
    else {
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
exports.getOrmConfig = getOrmConfig;
class DatabaseModule {
    static forRoot(settings) {
        const ormConfig = getOrmConfig(settings);
        return {
            module: DatabaseModule,
            imports: [
                typeorm_1.TypeOrmModule.forRoot(ormConfig),
            ],
        };
    }
}
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map