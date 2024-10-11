import React, { useState, useEffect, useCallback } from "react";
import Post from "../../components/Post";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

interface PostData {
  id: string;
  memberId: string;
  publicScope: string;
  contents: string;
  media: string;
  createdAt: string;
}

const PlaygroundPage: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await axios.get<PostData[]>(
        `http://localhost:3000/feeds?_page=${page}&_limit=5`
      );
      const newPosts = res.data;
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (err) {
      console.error(err);
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="w-full min-h-screen">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollThreshold={0.9}
        style={{ overflow: "hidden" }}
      >
        <div className="flex flex-col items-center">
          {posts.map((post: PostData) => (
            <Post
              key={post.id}
              memberId={post.memberId}
              publicScope={post.publicScope}
              date={new Date(post.createdAt).toLocaleDateString()}
              contents={post.contents}
              media={post.media}
            />
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
};

export default PlaygroundPage;
