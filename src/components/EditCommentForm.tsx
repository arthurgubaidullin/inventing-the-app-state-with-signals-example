import type { CommentState } from "../comments/state";

export const EditCommentForm = ({ comment }: { comment: CommentState }) => {
  return (
    <div class="grid gap-4">
      <h4 class="">Edit Comment</h4>

      <form
        class="grid gap-4"
        onSubmit={async (e) => {
          e.preventDefault();

          const fd = new FormData(e.currentTarget);

          const content = fd.get("content");

          if (typeof content !== "string") {
            return;
          }

          await comment.updateContent(content);
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
          <input class="btn" type="submit" />
        </div>
      </form>
    </div>
  );
};
