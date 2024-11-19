import prisma from "@/lib/client";
import Image from "next/image";
import CommentList from "./CommentList";

interface CommentsProps {
  postId: string;
}

const Comments: React.FC<CommentsProps> = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="">
       <CommentList comments={comments} postId={postId}/>
    </div>
  );
};

export default Comments;
