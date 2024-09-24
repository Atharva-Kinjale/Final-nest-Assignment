import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Car1727159575926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "car",
                columns: [
                    {
                        name: "car_Id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "model",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "price",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "manufactureYear",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "mileage",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "location",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "isAvailable",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "CreatedAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "CreatedBy",
                        type: "int",
                        isNullable: true,
                        default: null,
                    },
                    {
                        name: "UpdatedAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "UpdatedBy",
                        type: "int",
                        isNullable: true,
                        default: null,
                    },
                    {
                        name: "DeletedAt",
                        type: "timestamp",
                        isNullable: true,
                    },
                ],
            })
        );

        // Foreign key for location referencing the locations table
        await queryRunner.createForeignKey(
            "car",
            new TableForeignKey({
                columnNames: ["location"],
                referencedColumnNames: ["pincode"],
                referencedTableName: "locations",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key first
        const table = await queryRunner.getTable("car");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("location") !== -1
        );
        await queryRunner.dropForeignKey("car", foreignKey);

        // Then drop the car table
        await queryRunner.dropTable("car");
    }

}
