import { signal, type ReadonlySignal, type Signal } from "@preact/signals";
import type { CommentState } from "./comment-type";
import { createCommentData, type CommentData } from "./comment-data";

export class Comment implements CommentState {
  #data: Signal<CommentData>;

  constructor(commentData: CommentData) {
    this.#data = signal(commentData);
  }

  async updateContent(newContent: string): Promise<void> {
    this.#data.value = createCommentData({
      id: this.#data.peek().id,
      postId: this.#data.peek().postId,
      content: newContent,
    });
  }

  get data(): ReadonlySignal<CommentData> {
    return this.#data;
  }
}
