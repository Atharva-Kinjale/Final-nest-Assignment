import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CarServiceMap1727160658181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create the carServiceMap table
        await queryRunner.createTable(
            new Table({
                name: "carServicemap",
                columns: [
                    {
                        name: "carServiceMapId",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "car_Id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "service_Id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "isInService",
                        type: "tinyint",
                        default: 0,
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
                    },
                    {
                        name: "DeletedAt",
                        type: "timestamp",
                        isNullable: true,
                    },
                ],
            })
        );

        // Create foreign key relationship with Car
        await queryRunner.createForeignKey(
            "carServicemap",
            new TableForeignKey({
                columnNames: ["car_Id"],
                referencedTableName: "car",
                referencedColumnNames: ["car_Id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // Create foreign key relationship with CarMantainance
        await queryRunner.createForeignKey(
            "carServicemap",
            new TableForeignKey({
                columnNames: ["service_Id"],
                referencedTableName: "carMaintainance",
                referencedColumnNames: ["service_Id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys
        const table = await queryRunner.getTable("carServicemap");
        const foreignKeys = table.foreignKeys;

        for (const foreignKey of foreignKeys) {
            await queryRunner.dropForeignKey("carServicemap", foreignKey);
        }

        // Drop the carServicemap table
        await queryRunner.dropTable("carServicemap");
    
    }

}
