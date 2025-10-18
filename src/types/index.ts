export type User = {
  id: string;
  username: string;
  name?: string;
  bio?: string;
  avatar_url?: string;
};

export type Post = {
  id: string;
  image_url: string;
  caption?: string;
  user_id: string;
  created_at?: string;
  liked?: boolean;
  saved?: boolean;
};
