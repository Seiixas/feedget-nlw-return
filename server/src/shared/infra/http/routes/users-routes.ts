import { Router } from 'express';
import { AuthenticateController } from '../../../../use-cases/authenticate/authenticate-controller';
import { CreateUserController } from '../../../../use-cases/create-user/create-user-controller';

const usersRouter = Router();

const authenticateController = new AuthenticateController();
const createUserController = new CreateUserController();

usersRouter.post('/users/auth', authenticateController.handle);
usersRouter.post('/users', createUserController.handle);

export { usersRouter };
