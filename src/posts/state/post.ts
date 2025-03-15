import { signal, type ReadonlySignal, type Signal } from "@preact/signals";
import { createPostData, type PostData } from "./post-data";
import type { PostState } from "./post-type";

export class Post implements PostState {
  #data: Signal<PostData>;

  constructor(postData: PostData) {
    this.#data = signal(postData);
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
