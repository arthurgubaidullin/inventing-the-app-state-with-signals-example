import type { CommentData } from "./comment-data";
import type { PostId } from "./post-id-type";

export interface CommentsStorage {
  readonly getComments: (postId: PostId) => Promise<ReadonlyArray<CommentData>>;
  readonly createComment: (newCommentData: CommentData) => Promise<void>;
}
