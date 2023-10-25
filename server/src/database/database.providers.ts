import { Sequelize } from 'sequelize-typescript';
import { Categoria } from 'src/models/categoria/entities/categoria.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'pass123',
                database: 'finance_app',
            });
            sequelize.addModels([Categoria]);
            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];
