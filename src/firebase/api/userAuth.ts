import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FirebaseAuthUserInfo, UserAuthReponse } from "../types";

export const createUser = async (
  userInfo: FirebaseAuthUserInfo
): Promise<UserAuthReponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    return { success: true, user: userCredential.user };
  } catch {
    console.error("error creating new user");
  }
  return { success: false, user: null };
};
