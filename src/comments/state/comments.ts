import { signal, type ReadonlySignal, type Signal } from "@preact/signals";
import type { CommentState } from "./comment-type";
import type { CommentsState } from "./comments-type";
import type { CommentsStorage } from "./storage-type";
import type { NewCommentData } from "./comment-data";
import { Comment } from "./comment";
import type { PostId } from "./post-id-type";

export class Comments implements CommentsState {
  #storage: CommentsStorage;
  #data: Signal<Array<CommentState>>;

  public readonly postId: PostId;

  constructor(storage: CommentsStorage, postId: PostId) {
    this.#data = signal([]);
    this.#storage = storage;
    this.postId = postId;
  }

  get data(): ReadonlySignal<readonly CommentState[]> {
    return this.#data;
  }

  async fetch(this: this): Promise<void> {
    const commentsData = await this.#storage.getComments(this.postId);

    const comments = commentsData.map((postData) => new Comment(postData));

    this.#data.value = comments;
  }

  async addPost(this: this, newComment: NewCommentData): Promise<void> {
    const comment = new Comment(newComment);

    this.#data.value = this.#data.value.concat(comment);
  }
}
