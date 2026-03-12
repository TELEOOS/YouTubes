export type shortVideoType = {
  id: string;
  videoUrl: string;
  title: string;
  user: string;
};

export interface ShortVideoType {
  id: string;
  videoUrl: string;
  title: string;
  user: string;
}

export interface ShortCommentType {
  id: string;
  user: string;
  text: string;
}
