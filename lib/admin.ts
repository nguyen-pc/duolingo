import { auth } from "@clerk/nextjs";

const allowedIds = ["user_2doiqJ7e4ZbaXLAsoDKv9zahJeJ"];

export const getIsAdmin = async () => {
  const { userId } = await auth();
  if (!userId) {
    return false;
  }

  return allowedIds.indexOf(userId) !== -1;
};
