import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FirebaseAuthUserInfo, UserAuthResponse } from "../../types";

export const createUser = async (
  userInfo: FirebaseAuthUserInfo
): Promise<UserAuthResponse> => {
  return await authenticateUser(userInfo, createUserWithEmailAndPassword);
};

export const loginUser = async (
  userInfo: FirebaseAuthUserInfo
): Promise<UserAuthResponse> => {
  return await authenticateUser(userInfo, signInWithEmailAndPassword);
};

const authenticateUser = async (
  userInfo: FirebaseAuthUserInfo,
  authFunction: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>
) => {
  try {
    const userCredential = await authFunction(
      auth,
      userInfo.email,
      userInfo.password
    );
    return { success: true, uid: userCredential.user.uid };
  } catch {
    console.error("error creating or signing in user");
  }
  return { success: false, uid: null };
};
