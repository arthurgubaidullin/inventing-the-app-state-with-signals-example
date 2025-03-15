import { useEffect } from "preact/hooks";
import type { CommentsState } from "../comments/state";
import { Comment } from "./Comment";

export const Comments = ({ comments }: { comments: CommentsState }) => {
  useEffect(() => {
    comments.fetch();
  }, [comments.fetch]);

  const listItems = comments.data.value.map((comment) => (
    <li class={comment.id}>
      <Comment comment={comment} />
    </li>
  ));

  return (
    <div class="grid gap-4">
      <h4 class="text-xl">Comments</h4>

      <ul>{listItems}</ul>
    </div>
  );
};
