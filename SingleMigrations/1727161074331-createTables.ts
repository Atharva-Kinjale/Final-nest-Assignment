import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTables1727161074331 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "locations",
                columns: [
                    {
                        name: "pincode",
                        type: "int",
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "country",
                        type: "varchar",
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
                    },
                    {
                        name: "serviceName",
                        type: "varchar",
                        isUnique: true,
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Then drop the users table
        await queryRunner.dropTable("locations");
        // Then drop the users table
        await queryRunner.dropTable("users");
        // Then drop the customer table
        await queryRunner.dropTable("customer");
        // Then drop the employee table
        await queryRunner.dropTable("employee");
    }

}
