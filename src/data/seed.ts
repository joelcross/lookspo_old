import type { Post, User } from "../types";

export const demoUsers: User[] = [
  {
    id: 1,
    username: "noirmoth",
    name: "Noir Moth",
    bio: "Avant-garde wardrobe seeker",
    avatar_url: "",
  },
  {
    id: 2,
    username: "pillowghost",
    name: "Pillow Ghost",
    bio: "Soft shapes, loud textures",
    avatar_url: "",
  },
];

export const demoPosts: Post[] = [
  {
    id: "p1",
    image_url: "https://picsum.photos/800/1200?random=1",
    caption: "Loose tailoring",
    user_id: 1,
    liked: false,
    saved: false,
  },
  {
    id: "p2",
    image_url: "https://picsum.photos/800/1200?random=2",
    caption: "Vintage scarf",
    user_id: 2,
    liked: true,
    saved: true,
  },
];
