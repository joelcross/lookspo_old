export type User = {
  id: number;
  username: string;
  name?: string;
  bio?: string;
  avatar_url?: string;
};

export type Post = {
  id: string;
  image_url: string;
  caption?: string;
  user_id: number;
  created_at?: string;
  liked?: boolean;
  saved?: boolean;
};
