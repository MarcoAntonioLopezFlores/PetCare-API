import {MigrationInterface, QueryRunner} from "typeorm";

export class petMigration1632635693221 implements MigrationInterface {
    name = 'petMigration1632635693221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`petcare\`.\`pets\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`breed\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`weight\` decimal NOT NULL, \`growth\` varchar(255) NOT NULL, \`color\` varchar(255) NOT NULL, \`temperament\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`pets\` ADD CONSTRAINT \`FK_4ddf2615c9d24b5be6d26830b4b\` FOREIGN KEY (\`user_id\`) REFERENCES \`petcare\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`pets\` DROP FOREIGN KEY \`FK_4ddf2615c9d24b5be6d26830b4b\``);
        await queryRunner.query(`DROP TABLE \`petcare\`.\`pets\``);
    }

}
