import { genSalt, hash } from 'bcryptjs';
import { use } from 'passport';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { SignupDto } from './dto';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signup(signupDto: SignupDto) {
    const { name, lastname, email, password, roles } = signupDto;

    const user = new User();

    user.name = name;
    user.lastname = lastname;
    user.email = email;

    user.roles = roles;

    const salt = await genSalt(10);

    user.password = await hash(password, salt);

    await user.save();
  }
}
