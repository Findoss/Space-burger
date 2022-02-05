import type { Order } from 'api/Order/types';
import type { ResolverState } from 'api/types';

export type initType = ResolverState & { entity: Order };
