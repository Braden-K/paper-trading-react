import { useState } from "react";
import { BaseButton } from "../components/BaseButton";
import { FormInput } from "../components/FormInput";
import {
  CreateUserInfo,
  FirebaseAuthUserInfo,
  UserAuthResponse,
  UserResponse,
} from "../types";
import "../styles.css";
import { getUserById, postUser } from "../firebase/api/user";
import { loginUser } from "../firebase/api/userAuth";
import { loadUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showSignup, setShowSignup] = useState<boolean>(true);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    let response: UserAuthResponse | null = null;
    let userInfo: CreateUserInfo | FirebaseAuthUserInfo | null = null;
    if (showSignup) {
      userInfo = { firstName, email, password };
      response = await postUser(userInfo);
    } else {
      userInfo = { email, password };
      response = await loginUser(userInfo);
    }
    if (!response.success || !response.uid) {
      console.error("error logging in user via auth");
    } else {
      const getUserResponse: UserResponse = await getUserById(response.uid);
      if (!getUserResponse.success) {
        console.error("error fetching user data from firestore");
      } else {
        dispatch(
          loadUser({
            user: {
              uid: response.uid,
              firstName: getUserResponse.user!.firstName,
              email,
            },
          })
        );
      }
    }
  };

  return (
    <div className="bg-dark-200 h-screen flex justify-center items-center">
      <div
        className="bg-dark-100 rounded-lg h-2/4 flex justify-center items-center flex-col shadow"
        style={{ width: 600 }}
      >
        <p className="text-light-100 font-Inter font-bold text-xl">
          {showSignup ? "Create an account to continue" : "Log in to continue"}
        </p>
        <form className="flex flex-col mb-10">
          {showSignup && (
            <FormInput
              id="firstname"
              label="first name"
              setValue={setFirstName}
            />
          )}
          <FormInput id="email" label="email" setValue={setEmail} />
          <FormInput id="password" label="password" setValue={setPassword} />
        </form>
        <BaseButton
          text={showSignup ? "sign up" : "log in"}
          onClick={onSubmit}
        />
        <div className="flex flex-row">
          <p className="text-light-100">
            {showSignup
              ? "Already have an account?"
              : "Don't have an account yet?"}
            &nbsp;
          </p>
          <p
            className="text-light-100 underline"
            onClick={() => setShowSignup(!showSignup)}
          >
            {showSignup ? "Login instead" : "Create account"}
          </p>
        </div>
      </div>
    </div>
  );
};
