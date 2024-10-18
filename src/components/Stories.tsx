import Image from "next/image";

const Stories: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm">
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28766047/pexels-photo-28766047/free-photo-of-healthy-breakfast-bowl-with-fresh-blueberries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            priority
          />
          <span className="font-medium">John</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
