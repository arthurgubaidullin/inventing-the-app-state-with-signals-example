import { useEffect } from "preact/hooks";
import { inMemoryAppState } from "../app-state/factory";
import { Posts } from "./Posts";
import { NewPostForm } from "./NewPostForm";

const appState = inMemoryAppState();

const App = () => {
  useEffect(() => {
    appState.posts.fetch();
  }, [appState.posts.fetch]);

  return (
    <div class="grid gap-8 m-8">
      <NewPostForm posts={appState.posts} />

      <Posts posts={appState.posts} />
    </div>
  );
};

export default App;
