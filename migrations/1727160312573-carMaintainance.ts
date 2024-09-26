import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CarMaintainance1727160312573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create the carMaintainance table
        await queryRunner.createTable(
            new Table({
                name: "carMaintainance",
                columns: [
                    {
                        name: "service_Id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "serviceName",
                        type: "varchar",
                        
                    },
                    {
                        name: "timeRequired",
                        type: "time",
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "cost",
                        type: "decimal",
                    },
                    {
                        name: "pincode",
                        type: "int",
                        isNullable: false,
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

        // Create foreign key relationship with Location
        await queryRunner.createForeignKey(
            "carMaintainance",
            new TableForeignKey({
                columnNames: ["pincode"],
                referencedTableName: "locations",
                referencedColumnNames: ["pincode"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys
        const table = await queryRunner.getTable("carMaintainance");
        const foreignKeys = table.foreignKeys;

        for (const foreignKey of foreignKeys) {
            await queryRunner.dropForeignKey("carMaintainance", foreignKey);
        }

        // Drop the carMaintainance table
        await queryRunner.dropTable("carMaintainance");
    
    }

}
