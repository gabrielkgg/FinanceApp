import {
    AllowNull,
    Column,
    CreatedAt,
    DataType,
    DeletedAt,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'categoria' })
export class Categoria extends Model {
    @PrimaryKey
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    public id: number;

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    public nome: string;

    @AllowNull(false)
    @Column({ type: DataType.STRING(20) })
    public icone: string;

    @CreatedAt
    public createdAt?: Date;

    @UpdatedAt
    public updatedAt?: Date;

    @DeletedAt
    public deletedAt?: Date;
}
