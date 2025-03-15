import { signal, type ReadonlySignal, type Signal } from "@preact/signals";
import type { CommentsState } from "../../comments/state";
import { Post } from "./post";
import type { NewPostData } from "./post-data";
import type { PostState } from "./post-type";
import type { PostsState } from "./posts-type";
import type { PostsStorage } from "./storage-type";

type CommentsFactory = (postId: string) => CommentsState;

export class Posts implements PostsState {
  #storage: PostsStorage;
  #data: Signal<Array<PostState>>;
  #comments: CommentsFactory;

  constructor(storage: PostsStorage, comments: CommentsFactory) {
    this.#data = signal([]);
    this.#storage = storage;
    this.#comments = comments;
  }

  get data(): ReadonlySignal<readonly PostState[]> {
    return this.#data;
  }

  async fetch(this: this): Promise<void> {
    const postsData = await this.#storage.getPosts();

    const posts = postsData.map(
      (postData) => new Post(this.#comments(postData.id), postData)
    );

    this.#data.value = posts;
  }

  async addPost(this: this, newPost: NewPostData): Promise<void> {
    const post = new Post(this.#comments(newPost.id), newPost);

    this.#data.value = this.#data.value.concat(post);
  }
}
