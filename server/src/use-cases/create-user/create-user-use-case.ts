import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/users-repository";
import { AppError } from "../../shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: UsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('This email is already registered');
    }

    const passwordHashed = await hash(password, 8);

    await this.usersRepository.create({
      email,
      password: passwordHashed 
    });
  }
}