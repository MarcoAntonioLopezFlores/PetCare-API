import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  photo: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  breed: string;

  @Column({ type: 'integer', nullable: false })
  age: number;

  @Column({ type: 'decimal', nullable: false })
  weight: number;

  @Column({ type: 'varchar', nullable: false })
  growth: string;

  @Column({ type: 'varchar', nullable: false })
  color: string;

  @Column({ type: 'varchar', nullable: false })
  temperament: string;

  @ManyToOne(() => User, (user) => user.pets)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'tinyint', nullable: false })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
