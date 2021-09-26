import {MigrationInterface, QueryRunner} from "typeorm";

export class fixRelations1632639169558 implements MigrationInterface {
    name = 'fixRelations1632639169558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`petcare\`.\`user_details\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NULL, \`lastname\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`age\` int NULL, \`status\` varchar(8) NOT NULL DEFAULT 'ACTIVE', \`created_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` DROP COLUMN \`lastname\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` ADD \`detail_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` ADD UNIQUE INDEX \`IDX_9fc134ca20766e165ad650ee74\` (\`detail_id\`)`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`pets\` ADD \`photo\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_9fc134ca20766e165ad650ee74\` ON \`petcare\`.\`users\` (\`detail_id\`)`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` ADD CONSTRAINT \`FK_9fc134ca20766e165ad650ee740\` FOREIGN KEY (\`detail_id\`) REFERENCES \`petcare\`.\`user_details\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` DROP FOREIGN KEY \`FK_9fc134ca20766e165ad650ee740\``);
        await queryRunner.query(`DROP INDEX \`REL_9fc134ca20766e165ad650ee74\` ON \`petcare\`.\`users\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`pets\` DROP COLUMN \`photo\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` DROP INDEX \`IDX_9fc134ca20766e165ad650ee74\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` DROP COLUMN \`detail_id\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` ADD \`lastname\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`petcare\`.\`user_details\``);
    }

}
