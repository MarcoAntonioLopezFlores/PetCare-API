import { genSalt, hash } from 'bcryptjs';
import { EntityRepository, Repository } from 'typeorm';
import { UserDetails } from '../user/user.details.entity';
import { User } from '../user/user.entity';
import { SignupDto } from './dto';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signup(signupDto: SignupDto) {
    const { name, lastname, age, phone, email, password, roles } = signupDto;
    console.log(signupDto);
    const user = new User();

    const details = new UserDetails();
    details.name = name;
    details.lastname = lastname;
    details.phone = phone;
    details.age = age;
    user.details = details;
    user.email = email;

    user.roles = roles;

    const salt = await genSalt(10);

    user.password = await hash(password, salt);

    await user.save();
  }
}
