import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';
import AppError from '../../errors/AppError';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
  gender: 'male' | 'female';
  phone: string;
  birthdate: Date;
}

export default class CreateUserService {
  // trocar void
  public async execute({
    name,
    email,
    password,
    gender,
    phone,
    birthdate,
  }: RequestDTO): Promise<User> {
    const userRepository = getRepository(User);

    const userExist = await userRepository.findOne({
      where: { email },
    });

    if (userExist) {
      throw new AppError('This email is already being used', 400);
    }

    const passwordHashed = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      birthdate,
      gender,
      phone,
      password: passwordHashed,
    });

    await userRepository.save(user);

    return user;
  }
}
