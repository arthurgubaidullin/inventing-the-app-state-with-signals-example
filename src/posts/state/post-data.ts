export interface PostData {
  readonly id: string;
  readonly content: string;
}

export interface NewPostData {
  readonly id: string;
  readonly content: string;
}

export const createPostData = (data: NewPostData): PostData =>
  Object.freeze({
    id: crypto.randomUUID(),
    content: data.content,
  });
