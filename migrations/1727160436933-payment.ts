import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Payment1727160436933 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create the payment table
        await queryRunner.createTable(
            new Table({
                name: "payment",
                columns: [
                    {
                        name: "payment_Id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "order_Id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "paymentType",
                        type: "enum",
                        enum: ["cash", "online", "check", "loan"],
                    },
                    {
                        name: "paymentStatus",
                        type: "enum",
                        enum: ["success", "processing", "failed"],
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

        // Create foreign key relationship with OrderDetail
        await queryRunner.createForeignKey(
            "payment",
            new TableForeignKey({
                columnNames: ["order_Id"],
                referencedTableName: "orderDetails",
                referencedColumnNames: ["order_Id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys
        const table = await queryRunner.getTable("payment");
        const foreignKeys = table.foreignKeys;

        for (const foreignKey of foreignKeys) {
            await queryRunner.dropForeignKey("payment", foreignKey);
        }

        // Drop the payment table
        await queryRunner.dropTable("payment");
    
    }

}
