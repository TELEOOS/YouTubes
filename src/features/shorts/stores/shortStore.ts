import { create } from 'zustand';
import { shortVideoType } from '../types';
import { getShorts } from '../api/ShortsApi';

interface ShortsState {
  videos: shortVideoType[];
  loading: boolean;

  loadMore: () => Promise<void>;
}

export const useShortsStore = create<ShortsState>((set, get) => ({
  videos: [],
  loading: false,

  loadMore: async () => {
    if (get().loading) return;

    set({ loading: true });

    const data = await getShorts();

    set({
      videos: [...get().videos, ...data],
      loading: false,
    });
  },
}));
