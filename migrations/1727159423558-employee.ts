import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Employee1727159423558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employee",
                columns: [
                    {
                        name: "employee_Id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_Id",
                        type: "int",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "employeeRole",
                        type: "enum",
                        enum:['Salesperson' ,'Technician','Manager','Mechanic'],
                        isNullable: false,
                    },
                    {
                        name: "salary",
                        type: "decimal",
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

        // Foreign key for user_Id referencing users table
        await queryRunner.createForeignKey(
            "employee",
            new TableForeignKey({
                columnNames: ["user_Id"],
                referencedColumnNames: ["user_Id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key first
        const table = await queryRunner.getTable("employee");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("user_Id") !== -1
        );
        await queryRunner.dropForeignKey("employee", foreignKey);

        // Then drop the employee table
        await queryRunner.dropTable("employee");

    }

}
