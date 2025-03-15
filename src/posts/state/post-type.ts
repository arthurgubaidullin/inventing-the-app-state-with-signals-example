import type { ReadonlySignal } from "@preact/signals";
import type { PostData } from "./post-data";

export interface PostState {
  readonly data: ReadonlySignal<PostData>;
  readonly updateContent: (newContent: string) => Promise<void>;
}
