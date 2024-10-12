import axios from "axios";

const PAGE_SIZE = 5; // 한 페이지당 포스트 수

export const fetchPosts = async (cursor: number = 0) => {
  const res = await axios.get(
    `https://dummyjson.com/posts?limit=${PAGE_SIZE}&skip=${cursor}`
  );
  const totalCount = res.data.total; // 전체 포스트 수
  const hasNextPage = cursor + PAGE_SIZE < totalCount; // 다음 페이지가 있는지 확인

  console.log("무한 테스트:", totalCount, cursor, hasNextPage);

  return {
    data: res.data.posts,
    nextCursor: hasNextPage ? cursor + PAGE_SIZE : undefined, // 다음 커서 계산
  };
};
