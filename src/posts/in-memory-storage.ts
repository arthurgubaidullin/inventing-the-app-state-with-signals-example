import type { PostsStorage, PostData } from "./state";

export class InMemoryPostsStorage implements PostsStorage {
  #items: Map<string, PostData> = new Map();

  async getPosts(this: this): Promise<ReadonlyArray<PostData>> {
    return Array.from(this.#items.values());
  }

  async createPost(this: this, post: PostData): Promise<void> {
    this.#items.set(post.id, post);
  }
}
