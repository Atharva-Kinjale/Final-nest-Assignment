import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class OrderDetails1727159673331 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orderDetails",
                columns: [
                    {
                        name: "order_Id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "employee_Id",
                        type: "int",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "customer_Id",
                        type: "int",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "car_Id",
                        type: "int",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "amount",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "orderDate",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "location",
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
                    },
                ],
            })
        );

        // Foreign key for employee_Id referencing employee table
        await queryRunner.createForeignKey(
            "orderDetails",
            new TableForeignKey({
                columnNames: ["employee_Id"],
                referencedColumnNames: ["employee_Id"],
                referencedTableName: "employee",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // Foreign key for customer_Id referencing customer table
        await queryRunner.createForeignKey(
            "orderDetails",
            new TableForeignKey({
                columnNames: ["customer_Id"],
                referencedColumnNames: ["customer_Id"],
                referencedTableName: "customer",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // Foreign key for car_Id referencing car table
        await queryRunner.createForeignKey(
            "orderDetails",
            new TableForeignKey({
                columnNames: ["car_Id"],
                referencedColumnNames: ["car_Id"],
                referencedTableName: "car",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // Foreign key for location referencing location table
        await queryRunner.createForeignKey(
            "orderDetails",
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
         // Drop foreign keys first
         const table = await queryRunner.getTable("orderDetails");
        
         const employeeForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("employee_Id") !== -1);
         const customerForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("customer_Id") !== -1);
         const carForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("car_Id") !== -1);
         const locationForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("location") !== -1);
 
         await queryRunner.dropForeignKey("orderDetails", employeeForeignKey);
         await queryRunner.dropForeignKey("orderDetails", customerForeignKey);
         await queryRunner.dropForeignKey("orderDetails", carForeignKey);
         await queryRunner.dropForeignKey("orderDetails", locationForeignKey);
 
         // Drop the orderDetails table
         await queryRunner.dropTable("orderDetails");
    }

}
