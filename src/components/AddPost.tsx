import Image from "next/image";

const AddPost: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="profile picture"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
        priority
      />
      <div className="flex-1">
        <form className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            name="desc"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <div className="self-end">
            <Image
              src="/emoji.png"
              alt="icon"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer"
              priority
            />
          </div>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          {/* <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src="/addimage.png" alt="" width={20} height={20} />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget> */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
