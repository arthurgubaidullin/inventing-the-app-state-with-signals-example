import type { ReadonlySignal } from "@preact/signals";
import type { NewCommentData } from "./comment-data";
import type { CommentState } from "./comment-type";

export interface CommentsState {
  readonly data: ReadonlySignal<ReadonlyArray<CommentState>>;
  readonly fetch: () => Promise<void>;
  readonly addPost: (newPost: NewCommentData) => Promise<void>;
}
