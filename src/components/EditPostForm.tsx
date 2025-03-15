import type { PostState } from "../posts/state";

export const EditPostForm = ({ post }: { post: PostState }) => {
  return (
    <div class="grid gap-4">
      <h4 class="text-3xl">Edit Post</h4>
      <form
        class="grid gap-4"
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
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Content</legend>
          <textarea
            className="textarea h-24 w-full"
            name="content"
            required
          ></textarea>
        </fieldset>

        <div>
          <input class="btn btn-primary" type="submit" />
        </div>
      </form>
    </div>
  );
};
