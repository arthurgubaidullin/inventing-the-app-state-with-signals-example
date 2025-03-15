import type {
  CommentData,
  CommentId,
  CommentsStorage,
  NewCommentData,
  PostId,
} from "./state";

export class InMemoryComments implements CommentsStorage {
  #data: Map<PostId, Map<CommentId, CommentData>> = new Map();

  async getComments(postId: PostId): Promise<ReadonlyArray<CommentData>> {
    return Array.from(this.#data.get(postId)?.values() ?? []);
  }

  async createComment(newCommentData: NewCommentData) {
    const current = this.#data.get(newCommentData.postId);

    if (current) {
      current.set(newCommentData.id, newCommentData);
      return;
    }

    this.#data.set(
      newCommentData.postId,
      new Map([[newCommentData.id, newCommentData]])
    );
  }
}
