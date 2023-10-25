import { Categoria } from '../entities/categoria.entity';
import { CATEGORIA_REPOSITORY } from './constants/providers';

export const categoriasProviders = [
    {
        provide: CATEGORIA_REPOSITORY,
        useValue: Categoria,
    },
];
