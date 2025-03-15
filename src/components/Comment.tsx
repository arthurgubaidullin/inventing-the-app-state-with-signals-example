import type { CommentState } from "../comments/state";
import { EditCommentForm } from "./EditCommentForm";

export const Comment = ({ comment }: { comment: CommentState }) => {
  return (
    <div class="grid gap-4 grid-cols-2">
      <div class="flex flex-col gap-4">
        <h5 class="">Comment</h5>

        <div class="flex-1">
          <p>{comment.data.value.content}</p>
        </div>
      </div>

      <div>
        <EditCommentForm comment={comment} />
      </div>
    </div>
  );
};
