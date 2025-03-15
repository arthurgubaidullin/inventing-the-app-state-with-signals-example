import { useEffect } from "preact/hooks";
import type { CommentsState } from "../comments/state";
import { Comment } from "./Comment";

export const Comments = ({ comments }: { comments: CommentsState }) => {
  useEffect(() => {
    comments.fetch();
  }, [comments.fetch]);

  const listItems = comments.data.value.map((comment) => (
    <li key={comment.id} class="py-4">
      <Comment comment={comment} />
    </li>
  ));

  return (
    <div class="grid gap-4">
      <h4 class="text-xl">Comments</h4>

      <ul class="list list-none">{listItems}</ul>
    </div>
  );
};
