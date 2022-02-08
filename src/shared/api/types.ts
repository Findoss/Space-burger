export type Resolver<P, R> = (params: P) => Promise<R>;

export type ResolverError = {
  status: number;
  message: string;
  success: false;
};

export type ResolverState = {
  status: 'pending' | 'fulfilled' | 'rejected';
};
