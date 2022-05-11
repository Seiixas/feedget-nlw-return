import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/users-repository";
import { AppError } from "../../shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    email: string;
  };
  token: string;
}


@injectable()
export class AuthenticateUseCase {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: UsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email incorrect', 401);
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new AppError('Email or password incorrect', 401);
    }

    const token = sign({}, '513c8c3c872185bb680921ef33e052a8', {
      subject: user.id,
      expiresIn: '10m',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        email: user.email,
      },
    };

    return tokenReturn;
  }
}