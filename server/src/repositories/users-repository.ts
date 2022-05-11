import { User } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface UsersCreateData {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface UsersRepository {
  create: ({ email, password }: UsersCreateData) => Promise<void>;
  findByEmail: (email: string) => Promise<User | null>;
  findById: (id: string) => Promise<User | null>;
}
