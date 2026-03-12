import { shortVideoType } from '../types';

export const getShorts = async (): Promise<shortVideoType[]> => {
  return [
    {
      id: '1',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Amazing nature',
      user: 'Guindo',
    },
    {
      id: '2',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      title: 'Beautiful sunset',
      user: 'User2',
    },
    {
      id: '3',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Cute puppy',
      user: 'User3',
    },
    {
      id: '4',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      title: 'City skyline',
      user: 'User4',
    },
    {
      id: '5',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Ocean waves',
      user: 'User5',
    },
    {
      id: '6',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      title: 'Mountain hike',
      user: 'User6',
    },
    {
      id: '7',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Forest walk',
      user: 'User7',
    },
  ];
};
