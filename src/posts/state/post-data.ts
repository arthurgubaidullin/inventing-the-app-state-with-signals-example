export interface PostData {
  readonly id: string;
  readonly content: string;
}

export interface NewPostData {
  readonly content: string;
}

export const createPostData = (data: PostData): PostData =>
  Object.freeze({
    id: crypto.randomUUID(),
    content: data.content,
  });
