import {MigrationInterface, QueryRunner} from "typeorm";

export class thirdMigration1632514507220 implements MigrationInterface {
    name = 'thirdMigration1632514507220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`petcare\`.\`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`description\` text NOT NULL, \`status\` varchar(8) NOT NULL DEFAULT 'ACTIVE', \`created_at\` timestamp NOT NULL, \`updated_at\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`petcare\`.\`user_roles\` (\`usersId\` int NOT NULL, \`rolesId\` int NOT NULL, INDEX \`IDX_99b019339f52c63ae615358738\` (\`usersId\`), INDEX \`IDX_13380e7efec83468d73fc37938\` (\`rolesId\`), PRIMARY KEY (\`usersId\`, \`rolesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` ADD \`lastname\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`user_roles\` ADD CONSTRAINT \`FK_99b019339f52c63ae6153587380\` FOREIGN KEY (\`usersId\`) REFERENCES \`petcare\`.\`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`user_roles\` ADD CONSTRAINT \`FK_13380e7efec83468d73fc37938e\` FOREIGN KEY (\`rolesId\`) REFERENCES \`petcare\`.\`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`user_roles\` DROP FOREIGN KEY \`FK_13380e7efec83468d73fc37938e\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`user_roles\` DROP FOREIGN KEY \`FK_99b019339f52c63ae6153587380\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` DROP COLUMN \`lastname\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` DROP COLUMN \`name\``);
        await queryRunner.query(`DROP INDEX \`IDX_13380e7efec83468d73fc37938\` ON \`petcare\`.\`user_roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_99b019339f52c63ae615358738\` ON \`petcare\`.\`user_roles\``);
        await queryRunner.query(`DROP TABLE \`petcare\`.\`user_roles\``);
        await queryRunner.query(`DROP TABLE \`petcare\`.\`roles\``);
    }

}
