import { CreateUserInfo, UserAuthResponse } from "../types";
import { createUser } from "./userAuth";
import { Collection } from "./collection";
import { User } from "../types";

const userCollection = new Collection<User>("users");

type PostUserResponse = UserAuthResponse;

export const postUser = async (
  userInfo: CreateUserInfo
): Promise<PostUserResponse> => {
  const res: UserAuthResponse = await createUser({
    email: userInfo.email,
    password: userInfo.password,
  });

  if (res.uid) {
    await userCollection.createDoc({
      uid: res.uid,
      firstName: userInfo.firstName,
      email: userInfo.email,
    });
    return { success: true, uid: res.uid };
  } else {
    return { success: false, uid: null };
  }
};
