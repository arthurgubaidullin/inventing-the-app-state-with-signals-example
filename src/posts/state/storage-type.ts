import type { PostData } from "./post-data";

export interface PostsStorage {
  readonly getPosts: () => Promise<ReadonlyArray<PostData>>;
  readonly createPost: (post: PostData) => Promise<void>;
}
