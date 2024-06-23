import { useContext } from "react";
import { PostList as PostListData } from "../store/Post-List-store";
import WelcomeMessage from "./WelcomeMessage";
import Post from "./Post";
import LoadingSpinner from "./Loading-Spinner";

const PostList = () => {
  const { postlist, featching } = useContext(PostListData);

  // example of useMemo
  // const arr = [1, 2, 3, 4, 5, 6];
  // const sortedarr = useMemo(() => arr.sort(), [arr]);

  return (
    <>
      {featching && <LoadingSpinner />}
      {!featching && postlist.length === 0 && <WelcomeMessage />}
      {!featching &&
        postlist.map((posts) => <Post key={posts.id} posts={posts} />)}
    </>
  );
};

export default PostList;
