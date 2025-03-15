import type { ReadonlySignal } from "@preact/signals";
import type { NewPostData } from "./post-data";
import type { PostState } from "./post-type";

export interface PostsState {
  readonly data: ReadonlySignal<ReadonlyArray<PostState>>;
  readonly fetch: () => Promise<void>;
  readonly addPost: (newPost: NewPostData) => Promise<void>;
}
