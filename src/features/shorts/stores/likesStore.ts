import { create } from 'zustand';

interface LikesState {
  likedVideos: Record<string, boolean>;
  likedCount: Record<string, number>;

  toggleLike: (videoId: string) => void;
}

export const useLikesStore = create<LikesState>((set, get) => ({
  likedVideos: {},
  likedCount: {},

  toggleLike: videoId => {
    const liked = get().likedVideos[videoId];

    set({
      likedVideos: {
        ...get().likedVideos,
        [videoId]: !liked,
      },
      likedCount: {
        ...get().likedCount,
        [videoId]: liked
          ? (get().likedCount[videoId] || 0) - 1
          : (get().likedCount[videoId] || 0) + 1,
      },
    });
  },
}));
