import type { CommentState } from "../comments/state";

export const Comment = ({ comment }: { comment: CommentState }) => {
  return <div>{comment.data.value.content}</div>;
};
