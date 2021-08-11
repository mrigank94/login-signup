import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import usePosts from "./usePosts";

const NewsArticles = () => {
  const [data, loading] = usePosts();

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <Link to="/posts">Posts</Link>
      {data.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
};

export default NewsArticles;
