import type { PostState } from "../posts/state";
import { Comments } from "./Comments";
import { EditPostForm } from "./EditPostForm";
import { NewCommentForm } from "./NewCommentForm";

export const Post = ({ post }: { post: PostState }) => {
  return (
    <div>
      <h3>Post</h3>
      <p>{post.data.value.content}</p>
      <br />
      <EditPostForm post={post} />
      <br />

      <Comments comments={post.comments} />
      <br />
      <NewCommentForm comments={post.comments} />
    </div>
  );
};
