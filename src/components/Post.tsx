import Image from "next/image";
import Comments from "./Comments";

const Post: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="profile image"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <h6 className="font-medium">John Doe</h6>
        </div>
        <Image
          src="/more.png"
          alt="more icon"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-80 md:min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="post image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="font-medium text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo qui
          dolores nostrum necessitatibus consequuntur saepe accusantium ullam
          exercitationem possimus nobis!
        </p>
      </div>
      <div className="grid grid-cols-2 text-sm my-4">
        <div className="flex gap-4 w-full">
          <div className="flex items-center gap-3 md:gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="like icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="comment icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="flex items-center gap-3 md:gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="share icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
