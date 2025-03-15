import { AppState } from "./app-state";
import { Posts } from "../posts/state";
import { InMemoryPostsStorage } from "../posts/in-memory-storage";
import { InMemoryComments } from "../comments/in-memory-storage";
import { Comments } from "../comments/state";

export const inMemoryAppState = () => {
  const commentsStorage = new InMemoryComments();
  const postsStorage = new InMemoryPostsStorage();

  const posts = new Posts(
    postsStorage,
    (postId) => new Comments(commentsStorage, postId)
  );

  return new AppState(posts);
};
