import type { ReadonlySignal } from "@preact/signals";
import type { CommentData } from "./comment-data";

export interface CommentState {
  readonly id: string;
  readonly data: ReadonlySignal<CommentData>;
  readonly updateContent: (newContent: string) => Promise<void>;
}
