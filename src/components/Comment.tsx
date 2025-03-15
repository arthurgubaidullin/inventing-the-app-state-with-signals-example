import type { CommentState } from "../comments/state";
import { EditCommentForm } from "./EditCommentForm";

export const Comment = ({ comment }: { comment: CommentState }) => {
  return (
    <div class="grid gap-4">
      <h5 class="">Comment</h5>

      <p>{comment.data.value.content}</p>

      <EditCommentForm comment={comment} />
    </div>
  );
};
