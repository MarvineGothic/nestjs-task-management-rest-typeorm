import {TypeOrmModuleOptions} from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions  = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,  
    entities: ['src/**/*.entity.ts'],
    autoLoadEntities: true,
    migrationsTableName: "typeorm_migrations",
    migrations: ["migrations/*.ts"],
    cli: {
      migrationsDir: "migrations"
    }
  }

export default ormconfig;