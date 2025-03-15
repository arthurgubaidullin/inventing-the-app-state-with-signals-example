import { signal, type ReadonlySignal, type Signal } from "@preact/signals";
import { Post } from "./post";
import type { NewPostData } from "./post-data";
import type { PostState } from "./post-type";
import type { PostsState } from "./posts-type";
import type { PostsStorage } from "./storage-type";

export class Posts implements PostsState {
  #storage: PostsStorage;
  #data: Signal<Array<PostState>>;

  constructor(storage: PostsStorage) {
    this.#data = signal([]);
    this.#storage = storage;
  }

  get data(): ReadonlySignal<readonly PostState[]> {
    return this.#data;
  }

  async fetch(this: this): Promise<void> {
    const postsData = await this.#storage.getPosts();

    const posts = postsData.map((postData) => new Post(postData));

    this.#data.value = posts;
  }

  async addPost(this: this, newPost: NewPostData): Promise<void> {
    const post = new Post(newPost);

    this.#data.value = this.#data.value.concat(post);
  }
}
