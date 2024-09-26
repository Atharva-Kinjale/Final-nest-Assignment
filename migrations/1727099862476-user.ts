import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class User1727099862476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "user_Id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "F_Name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "L_Name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "Email",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "Contact_No",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "Gender",
                        type: "enum",
                        enum: ['male', 'female', 'other'],
                        isNullable: false,
                    },
                    {
                        name: "pinCode",
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

        // Add foreign key for the Location (pincode) relationship
        await queryRunner.createForeignKey(
            "users",
            new TableForeignKey({
                columnNames: ["pinCode"],
                referencedColumnNames: ["pincode"],
                referencedTableName: "locations",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key first
        const table = await queryRunner.getTable("users");
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("pinCode") !== -1
        );
        await queryRunner.dropForeignKey("users", foreignKey);

        // Then drop the users table
        await queryRunner.dropTable("users");
    
    }

}
