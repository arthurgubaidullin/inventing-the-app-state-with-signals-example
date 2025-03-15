import type { PostsState } from "../posts/state";
import { Post } from "./Post";

export const Posts = ({ posts }: { posts: PostsState }) => {
  const listItems = posts.data.value.map((post) => (
    <li key={post.id}>
      <Post post={post} />
    </li>
  ));

  return (
    <div>
      <h2>Posts</h2>

      <ul>{listItems}</ul>
    </div>
  );
};
