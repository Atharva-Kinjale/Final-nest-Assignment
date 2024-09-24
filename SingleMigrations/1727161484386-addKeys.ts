import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddKeys1727161484386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        let table = await queryRunner.getTable("users");
       let foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("pinCode") !== -1
        );
        await queryRunner.dropForeignKey("users", foreignKey);

         // Drop foreign key first
          table = await queryRunner.getTable("customer");
         foreignKey = table.foreignKeys.find(
             (fk) => fk.columnNames.indexOf("user_Id") !== -1
         );
         await queryRunner.dropForeignKey("customer", foreignKey);

         // Drop foreign key first
        table = await queryRunner.getTable("employee");
        foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("user_Id") !== -1
        );
        await queryRunner.dropForeignKey("employee", foreignKey);
    }

}
