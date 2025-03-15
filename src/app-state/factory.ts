import { AppState } from "./app-state";
import { Posts } from "../posts/state";
import { InMemoryPostsStorage } from "../posts/in-memory-storage";

export const inMemoryAppState = () => {
  const postsStorage = new InMemoryPostsStorage();

  const posts = new Posts(postsStorage);

  return new AppState(posts);
};
