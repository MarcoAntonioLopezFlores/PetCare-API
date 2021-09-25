import {MigrationInterface, QueryRunner} from "typeorm";

export class secondMigration1632513534742 implements MigrationInterface {
    name = 'secondMigration1632513534742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`petcare\`.\`users\``);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` DROP COLUMN \`username\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` ADD \`username\` varchar(30) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`petcare\`.\`users\` (\`username\`)`);
    }

}
