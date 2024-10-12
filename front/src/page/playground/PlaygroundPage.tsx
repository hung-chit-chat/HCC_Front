import React, { useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { fetchPosts } from "../../hook/api/fetchPosts";
import { useInfiniteQuery } from "@tanstack/react-query";
import Post from "../../components/Post";

interface PostData {
  id: string;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

const PlaygroundPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Increase threshold to trigger when more of the element is visible
  });

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 0 }) => fetchPosts(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        loadMore();
      }, 300); // Add a small delay to prevent multiple rapid calls

      return () => clearTimeout(timer);
    }
  }, [inView, loadMore]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  const allPosts = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <main className="w-full">
      <div className="flex flex-col items-center space-y-4">
        {allPosts.map((post: PostData) => (
          <Post
            key={post.id}
            memberId={post.userId.toString()}
            publicScope="PUBLIC"
            date={new Date().toLocaleDateString()}
            contents={post.body}
            media={`https://picsum.photos/seed/${post.id}/200`}
          />
        ))}
      </div>
      {(hasNextPage || isFetchingNextPage) && (
        <div ref={ref} className="text-xl font-bold text-center py-4">
          {isFetchingNextPage ? "Loading more..." : "Load more"}
        </div>
      )}
      {!hasNextPage && !isFetchingNextPage && (
        <div className="text-xl font-bold text-center py-4">
          No more posts to load
        </div>
      )}
    </main>
  );
};

export default PlaygroundPage;
