import { Model } from 'sequelize-typescript';
export declare class Categoria extends Model {
    id: number;
    nome: string;
    icone: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
