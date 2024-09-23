import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Location1727097036816 implements MigrationInterface {

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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("locations");
    }

}
