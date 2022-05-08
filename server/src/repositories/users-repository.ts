// eslint-disable-next-line @typescript-eslint/naming-convention
export interface UsersCreateData {
  username: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface UsersRepository {
  create: ({ username, password }: UsersCreateData) => Promise<void>;
}
