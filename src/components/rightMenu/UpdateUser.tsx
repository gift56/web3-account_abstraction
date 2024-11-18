"use client";

import { User } from "@prisma/client";

interface UpdateUserProps {
  user: User;
}

const UpdateUser: React.FC<UpdateUserProps> = ({user}) => {
  return <div>UpdateUser</div>;
};

export default UpdateUser;
