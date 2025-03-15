import type { ReadonlySignal } from "@preact/signals";
import type { PostData } from "./post-data";
import type { CommentsState } from "../../comments/state";

export interface PostState {
  readonly comments: CommentsState;
  readonly data: ReadonlySignal<PostData>;
  readonly updateContent: (newContent: string) => Promise<void>;
}
