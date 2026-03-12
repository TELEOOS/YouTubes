import { ShortCommentType } from '../types';

export const getCommentsByVideoId = async (
  videoId: string,
): Promise<ShortCommentType[]> => {
  return [
    { id: `${videoId}-1`, user: 'alice', text: 'Incroyable 🔥' },
    { id: `${videoId}-2`, user: 'bob', text: 'Très propre cette vidéo' },
    { id: `${videoId}-3`, user: 'charlie', text: 'J’aime beaucoup' },
  ];
};
