import { signal, type ReadonlySignal, type Signal } from "@preact/signals";
import { createPostData, type PostData } from "./post-data";
import type { PostState } from "./post-type";
import type { CommentsState } from "../../comments/state";

export class Post implements PostState {
  #data: Signal<PostData>;
  public readonly comments: CommentsState;
  public readonly id: string;

  constructor(comments: CommentsState, postData: PostData) {
    this.#data = signal(postData);
    this.comments = comments;
    this.id = postData.id;
  }

  async updateContent(newContent: string): Promise<void> {
    this.#data.value = createPostData({
      id: this.#data.peek().id,
      content: newContent,
    });
  }

  get data(): ReadonlySignal<PostData> {
    return this.#data;
  }
}
