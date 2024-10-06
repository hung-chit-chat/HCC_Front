import Sidebar from "../../components/layout/Siderbar";
import Post from "../../components/Post";

export default function FeedPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 ml-[80px] md:ml-60 transition-all duration-300">
        <div className="max-w-3xl mx-auto">
          <div className="my-10">
            <h1 className="text-3xl font-bold">피드 페이지</h1>
          </div>
          <div className="space-y-6">
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
        </div>
      </main>
    </div>
  );
}
