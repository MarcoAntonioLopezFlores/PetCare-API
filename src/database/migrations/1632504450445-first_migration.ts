import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1632504450445 implements MigrationInterface {
    name = 'firstMigration1632504450445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`petcare\`.\`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(30) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` varchar(8) NOT NULL DEFAULT 'ACTIVE', \`created_at\` timestamp NOT NULL, \`updated_at\` timestamp NOT NULL, UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`petcare\`.\`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`petcare\`.\`users\``);
        await queryRunner.query(`DROP TABLE \`petcare\`.\`users\``);
    }

}
