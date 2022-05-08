import type { User } from 'shared/api/user/types';
import type { ResolverState } from 'shared/api/types';

export type initType = ResolverState & { entity: User };
