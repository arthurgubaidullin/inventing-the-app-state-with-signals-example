import type { PostState } from "../posts/state";
import { Comments } from "./Comments";
import { NewCommentForm } from "./NewCommentForm";

export const Post = ({ post }: { post: PostState }) => {
  return (
    <div>
      {post.data.value.content}
      <br />

      <Comments comments={post.comments} />
      <br />
      <NewCommentForm comments={post.comments} />
    </div>
  );
};
