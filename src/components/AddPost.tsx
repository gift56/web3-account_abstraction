"use client";
import { addPost } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const AddPost: React.FC = () => {
  const { user, isLoaded } = useUser();
  const { pending } = useFormStatus();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return <div className="w-full p-4 min-h-20 bg-gray-300 animate-pulse rounded-lg" />;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt={`${user?.username} profile picture`}
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
        priority
      />
      <div className="flex-1">
        <form
          action={(formData) => addPost(formData, img?.secure_url || "")}
          className="flex gap-4"
        >
          <textarea
            placeholder="What's on your mind?"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
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
          <button
            className="bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={pending}
          >
            {pending ? (
              <div className="flex items-center gap-2">
                <div className="inline-block h-[10px] w-[10px] animate-spin rounded-full border-2 border-white-300 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                Sending
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="socialmedia"
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
                  <Image
                    src="/addimage.png"
                    alt="addimage icon"
                    width={20}
                    height={20}
                  />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>
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
