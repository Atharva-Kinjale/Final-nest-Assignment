import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Customer1727159300666 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "customer",
                columns: [
                    {
                        name: "customer_Id",
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
                    }
                ],
            })
        );

        // Foreign key for user_Id referencing users table
        await queryRunner.createForeignKey(
            "customer",
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
        const table = await queryRunner.getTable("customer");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("user_Id") !== -1
        );
        await queryRunner.dropForeignKey("customer", foreignKey);

        // Then drop the customer table
        await queryRunner.dropTable("customer");
    
    }

}
