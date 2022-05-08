import type { Order } from 'shared/api/order/types';
import type { ResolverState } from 'shared/api/types';

export type initType = ResolverState & { entity: Order };
