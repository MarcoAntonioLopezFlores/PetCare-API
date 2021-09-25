import {MigrationInterface, QueryRunner} from "typeorm";

export class fixColumnsMigration1632524485640 implements MigrationInterface {
    name = 'fixColumnsMigration1632524485640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`roles\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`roles\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` CHANGE \`updated_at\` \`updated_at\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`users\` CHANGE \`created_at\` \`created_at\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`roles\` CHANGE \`updated_at\` \`updated_at\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`petcare\`.\`roles\` CHANGE \`created_at\` \`created_at\` timestamp(0) NOT NULL`);
    }

}
