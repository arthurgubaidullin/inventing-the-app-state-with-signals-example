import type { CommentsState } from "../comments/state";

export const NewCommentForm = ({ comments }: { comments: CommentsState }) => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const fd = new FormData(e.currentTarget);

        const content = fd.get("content");

        if (typeof content !== "string") {
          return;
        }

        await comments.addComment({ content });
      }}
    >
      <label>
        Content: <input name="content" type="text" required />
      </label>

      <input type="submit" />
    </form>
  );
};
