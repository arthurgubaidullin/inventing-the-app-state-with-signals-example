import type { PostsState } from "../posts/state";

export const NewPostForm = ({ posts }: { posts: PostsState }) => {
  return (
    <form
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
      <label>
        Content: <input name="content" type="text" required />
      </label>

      <input type="submit" />
    </form>
  );
};
