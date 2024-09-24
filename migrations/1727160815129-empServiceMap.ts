import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class EmpServiceMap1727160815129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create the employeeServiceMap table
        await queryRunner.createTable(
            new Table({
                name: "employeeServiceMap",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "employee_Id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "service_Id",
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

        // Create foreign key relationship with Employee
        await queryRunner.createForeignKey(
            "employeeServiceMap",
            new TableForeignKey({
                columnNames: ["employee_Id"],
                referencedTableName: "employee",
                referencedColumnNames: ["employee_Id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // Create foreign key relationship with CarMantainance
        await queryRunner.createForeignKey(
            "employeeServiceMap",
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
        const table = await queryRunner.getTable("employeeServiceMap");
        const foreignKeys = table.foreignKeys;

        for (const foreignKey of foreignKeys) {
            await queryRunner.dropForeignKey("employeeServiceMap", foreignKey);
        }

        // Drop the employeeServiceMap table
        await queryRunner.dropTable("employeeServiceMap");

    }

}
