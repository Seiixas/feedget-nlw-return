// eslint-disable-next-line @typescript-eslint/naming-convention
export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
