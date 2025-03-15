import type { PostState } from "../posts/state";
import { Comments } from "./Comments";
import { EditPostForm } from "./EditPostForm";
import { NewCommentForm } from "./NewCommentForm";

export const Post = ({ post }: { post: PostState }) => {
  return (
    <div class="grid gap-4">
      <div class="grid gap-4 grid-cols-5">
        <div class="col-span-3 flex flex-col gap-4">
          <h3 class="text-3xl">Post</h3>

          <p class="flex-1">{post.data.value.content}</p>
        </div>

        <div class="col-span-2">
          <EditPostForm post={post} />
        </div>
      </div>

      <div class="grid gap-4 grid-cols-5">
        <div class="col-span-3">
          <Comments comments={post.comments} />
        </div>
        <div class="col-span-2">
          <NewCommentForm comments={post.comments} />
        </div>
      </div>
    </div>
  );
};
