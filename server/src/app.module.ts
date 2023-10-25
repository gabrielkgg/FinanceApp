import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CategoriaModule } from './models/categoria/categoria.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),
        DatabaseModule,
        CategoriaModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
