import Sidebar from "../../components/layout/sidebar/Sidebar";
import Post from "../../components/Post";

export default function FeedPage() {
  return (
    <div className="w-full min-h-screen flex p-4">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="my-10">
          <h1 className="text-3xl font-bold">피드 페이지</h1>
        </div>
        <div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    </div>
  );
}
