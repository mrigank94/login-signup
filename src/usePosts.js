import { useEffect, useState } from "react";
import { getPosts } from "./api";

export default function usePosts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((response) => setData(response))
      .catch((ex) => console.log(ex))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading];
}
