import type { StoreState } from '@/shared/store';
import { User } from '@/shared/types';

export const userSelector = (state: StoreState): User => state.user;
