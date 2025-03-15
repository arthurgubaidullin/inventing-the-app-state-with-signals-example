import type { PostState } from "../posts/state";
import { Comments } from "./Comments";
import { EditPostForm } from "./EditPostForm";
import { NewCommentForm } from "./NewCommentForm";

export const Post = ({ post }: { post: PostState }) => {
  return (
    <div>
      {post.data.value.content}
      <br />
      <EditPostForm post={post} />
      <br />

      <Comments comments={post.comments} />
      <br />
      <NewCommentForm comments={post.comments} />
    </div>
  );
};
