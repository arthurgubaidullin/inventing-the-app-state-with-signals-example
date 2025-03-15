import type { ReadonlySignal } from "@preact/signals";
import type { CommentData } from "./comment-data";

export interface CommentState {
  readonly data: ReadonlySignal<CommentData>;
  readonly updateContent: (newContent: string) => Promise<void>;
}
