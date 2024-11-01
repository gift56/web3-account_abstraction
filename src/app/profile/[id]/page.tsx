import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socail Media App | Profile Details",
  description: "Socail Media App",
};

const Profilepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <aside aria-label="left side navigation" className="sticky top-5">
          <LeftMenu />
        </aside>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] overflow-y-auto">
        <aside aria-label="right side navigation">
          <RightMenu />
        </aside>
      </div>
    </div>
  );
};

export default Profilepage;
