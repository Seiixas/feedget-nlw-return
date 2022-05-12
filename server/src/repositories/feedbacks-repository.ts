import { Feedback } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
  severity?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
  list: () => Promise<Feedback[]>;
  findById: (id: string) => Promise<Feedback | null>;
  markDone: (id: string) => Promise<void>;
  markUndone: (id: string) => Promise<void>;
}
