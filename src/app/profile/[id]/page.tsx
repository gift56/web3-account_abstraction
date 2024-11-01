import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Socail Media App | Profile Details",
  description: "Socail Media App",
};

const Profilepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <aside aria-label="left side navigation">
          <LeftMenu type="profile" />
        </aside>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex  flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="profile background image"
                fill
                className="object-cover rounded-md ring-1 ring-white"
              />
              <Image
                src="https://images.pexels.com/photos/27592345/pexels-photo-27592345/free-photo-of-halloween.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="profile image"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              John doe @johndoe
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">500</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">5000</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">500</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] overflow-y-auto">
        <aside aria-label="right side navigation">
          <RightMenu userId="test" />
        </aside>
      </div>
    </div>
  );
};

export default Profilepage;
