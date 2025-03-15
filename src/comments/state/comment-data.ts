export interface CommentData {
  readonly id: string;
  readonly postId: string;
  readonly content: string;
}

export interface NewCommentData {
  readonly id: string;
  readonly postId: string;
  readonly content: string;
}

export const createCommentData = (data: CommentData): CommentData =>
  Object.freeze({
    content: data.content,
    id: data.id,
    postId: data.postId,
  });
