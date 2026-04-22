import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";
// TODO: Fetch the same posts, but using React Query (@tanstack/react-query).

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Requirements:
// 1. Write a `fetchPosts` function (outside the component) that:
//    - await fetch(API_URL)
//    - if !res.ok, throws new Error(`HTTP ${status}`)
//    - returns res.json() typed as Post[]
//    (React Query expects the fetcher to THROW on failure — that's how it
//    routes the error into the `error` field and into QueryCache.onError.)
const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`HTTP${response.status}`);
  }
  return response.json();
};

// 2. Use useQuery with:
//    - queryKey: ['posts']
//    - queryFn: fetchPosts
//    - retry: false  (so your error UI appears instantly during testing,
//      instead of React Query retrying 3 times first)

const usePostQuery = () =>
  useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    retry: false,
  });

export function PostsReactQuery() {
  const { data, error, isError, isLoading, refetch } = usePostQuery();
  // 3. Destructure { data, error, isError, isLoading, refetch } from useQuery.

  if (isError) {
    return (
      <div className="rounded border border-red-300 bg-red-50 p-4 text-red-800">
        <p>Could not load Posts</p>
        <p>{error.message}</p>
        <button onClick={() => refetch()} className="border-2 border-red-800">
          Try again
        </button>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <p>
        ...Loading <Loader />{" "}
      </p>
    );
  }
  return (
    <div>
      <p>currently {data.length} posts loaded</p>
      <button
        onClick={() => refetch()}
        className="bg-green-900 m-2 p-2 border-2 rounded-sm text-white"
      >
        Refetch
      </button>
      {data.map((post) => (
        <div key={post.id} className="border rounded-sm border-amber-700 mb-3">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
  // 4. Render:
  //    - If isError: show a red fallback box with {error.message} AND a
  //      "Try again" button that calls refetch().
  //    - If isLoading or !data: show "Loading...".
  //    - Otherwise: map posts and render each <h3>{title}</h3><p>{body}</p>.
  //
  // You should NOT need to call logger.error in this file — the global
  // QueryCache.onError you wired in App.tsx will handle that for you.

  // const posts: Post[] = [];
  // return (
  //   <div>
  //     <p>
  //       TODO — fetch {API_URL} with useQuery. (currently {posts.length} posts
  //       loaded)
  //     </p>
  //   </div>
  // );
}
