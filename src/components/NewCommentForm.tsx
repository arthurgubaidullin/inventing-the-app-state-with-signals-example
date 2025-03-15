import type { CommentsState } from "../comments/state";

export const NewCommentForm = ({ comments }: { comments: CommentsState }) => {
  return (
    <div class="grid gap-4">
      <h4 class="">New Comment</h4>

      <form
        class="grid gap-4"
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
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your comment?</legend>
          <input
            type="text"
            name="content"
            className="input"
            placeholder="Type here"
            required
          />
        </fieldset>

        <div>
          <input type="submit" class="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};
