import type { CommentState } from "../comments/state";

export const EditCommentForm = ({ comment }: { comment: CommentState }) => {
  return (
    <div>
      <h4>Edit Comment</h4>
      <form
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
        <label>
          Content: <input name="content" type="text" required />
        </label>

        <input type="submit" />
      </form>{" "}
    </div>
  );
};
