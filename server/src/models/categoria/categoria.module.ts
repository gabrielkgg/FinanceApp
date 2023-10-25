import { Module } from '@nestjs/common';
import { categoriasProviders } from './providers/categoria.providers';

@Module({
    providers: [...categoriasProviders],
})
export class CategoriaModule {}
