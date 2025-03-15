import type { CommentData, NewCommentData } from "./comment-data";
import type { PostId } from "./post-id-type";

export interface CommentsStorage {
  readonly getComments: (postId: PostId) => Promise<ReadonlyArray<CommentData>>;
  readonly createComment: (newCommentData: NewCommentData) => Promise<void>;
}
