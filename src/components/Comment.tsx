import type { CommentState } from "../comments/state";
import { EditCommentForm } from "./EditCommentForm";

export const Comment = ({ comment }: { comment: CommentState }) => {
  return (
    <div>
      <h3>Comment</h3>
      <p>{comment.data.value.content}</p>
      <br />
      <EditCommentForm comment={comment} />
    </div>
  );
};
