import { useState } from "react";
import { BaseButton } from "../components/BaseButton";
import { FormInput } from "../components/FormInput";
import { CreateUserInfo } from "../firebase/types";
import "../styles.css";
import { postUser } from "../firebase/api/user";

export const Login = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async () => {
    console.log("in onSubmit");
    const userInfo: CreateUserInfo = { firstName, email, password };
    const response = await postUser(userInfo);
    if (!response.success) {
      console.log("error!");
    }
    console.log(response);
  };

  return (
    <div className="bg-dark-200 h-screen flex justify-center items-center">
      <div
        className="bg-dark-100 rounded-lg h-2/4 flex justify-center items-center flex-col shadow"
        style={{ width: 600 }}
      >
        <p className="text-light-100 font-Inter font-bold text-xl">
          Create an account to continue
        </p>
        <form className="flex flex-col mb-10">
          <FormInput
            id="firstname"
            label="first name"
            setValue={setFirstName}
          />
          <FormInput id="email" label="email" setValue={setEmail} />
          <FormInput id="password" label="password" setValue={setPassword} />
        </form>
        <BaseButton text="Sign Up" onClick={onSubmit} />
      </div>
    </div>
  );
};
