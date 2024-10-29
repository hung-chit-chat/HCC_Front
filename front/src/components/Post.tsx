import { memo } from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

interface DataProps {
  memberId?: string;
  publicScope?: string;
  date?: string;
  contents?: string;
  media?: string;
}

const defaultData: Required<DataProps> = {
  memberId: "defaultUser",
  publicScope: "PUBLIC",
  date: "2024.07.21",
  contents: "This is a default post content",
  media: "https://picsum.photos/200/300",
};

export default function Post({
  memberId = defaultData.memberId,
  publicScope = defaultData.publicScope,
  date = defaultData.date,
  contents = defaultData.contents,
  media = defaultData.media,
}: DataProps) {
  return (
    <main className="w-[380px] min-h-[420px] border px-4 my-10">
      <div className="text-[15px] text-neutral-500">{date}</div>
      <div className="flex justify-center items-center">
        <img
          src={media}
          alt="post image"
          className="w-full max-h-[420px] object-cover"
        />
      </div>
      <div className="my-[10px]">
        <p className="text-[15px] text-neutral-500">{contents}</p>
      </div>
      <div className="flex justify-between my-[20px]">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <button>
              <FaRegHeart size={20} />
            </button>
            <span>0</span>
          </div>
          <div className="flex items-center gap-2">
            <button>
              <FaRegComment size={20} />
            </button>{" "}
            <span>0</span>
          </div>
        </div>
        <div>
          <IoShareOutline size={20} />
        </div>
      </div>
    </main>
  );
}
