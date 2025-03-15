import type { PostsState } from "../posts/state";

export const NewPostForm = ({ posts }: { posts: PostsState }) => {
  return (
    <div class="grid gap-4">
      <h2 class="text-5xl">New Post Form</h2>
      <form
        class="grid gap-4"
        onSubmit={async (e) => {
          e.preventDefault();

          const fd = new FormData(e.currentTarget);

          const content = fd.get("content");

          if (typeof content !== "string") {
            return;
          }

          await posts.addPost({ content });
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
