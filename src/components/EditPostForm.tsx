import type { PostState } from "../posts/state";

export const EditPostForm = ({ post }: { post: PostState }) => {
  return (
    <div>
      <h4>Edit Post</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const fd = new FormData(e.currentTarget);

          const content = fd.get("content");

          if (typeof content !== "string") {
            return;
          }

          await post.updateContent(content);
        }}
      >
        <label>
          Content: <input name="content" type="text" required />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};
