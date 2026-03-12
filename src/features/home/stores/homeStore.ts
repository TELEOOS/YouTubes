import { create } from 'zustand';
import { HomeVideo } from '../types';
import { getHomeVideos } from '../apis/homeApi';

interface HomeState {
  videos: HomeVideo[];
  loadVideos: () => Promise<void>;
}

export const useHomeStore = create<HomeState>(set => ({
  videos: [],

  loadVideos: async () => {
    const data = await getHomeVideos();
    set({ videos: data });
  },
}));
