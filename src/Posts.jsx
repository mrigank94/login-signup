import { CircularProgress } from "@material-ui/core";
import usePosts from "./usePosts";

const Posts = () => {
  const [data, loading] = usePosts();

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div>
      {data.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
