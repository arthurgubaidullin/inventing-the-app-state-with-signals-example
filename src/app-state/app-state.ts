import type { PostsState } from "../posts/state";

export class AppState {
  #posts: PostsState;

  constructor(posts: PostsState) {
    this.#posts = posts;
  }

  get posts(): PostsState {
    return this.#posts;
  }
}
