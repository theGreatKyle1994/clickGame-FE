import axios from "axios";
import { useState } from "react";
import LoginRegistration from "./Registration";

const AccountForm = () => {
  const [formState, setFormState] = useState<"login" | "register">("login");
  const [formData, setFormData] = useState<AccountFormData>({
    username: {
      value: "",
      errMsg: "",
    },
    email: {
      value: "",
      errMsg: "",
    },
    password: {
      value: "",
      errMsg: "",
    },
    cPassword: {
      value: "",
      errMsg: "",
    },
  });

  const formStateHandler = (): void => {
    setFormData((prevData) => ({
      username: {
        ...prevData.username,
        value: "",
      },
      email: {
        ...prevData.email,
        value: "",
      },
      password: {
        ...prevData.password,
        value: "",
      },
      cPassword: {
        ...prevData.cPassword,
        value: "",
      },
    }));
    setFormState((prevState) => (prevState === "login" ? "register" : "login"));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        errMsg: prevData[name as keyof AccountFormData].errMsg,
        value,
      },
    }));
  };

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await axios
      .post(
        `http://localhost:8000/${
          formState === "register" ? "create-account" : "login"
        }`,
        {
          username: formData.username.value,
          email: formData.email.value,
          password: formData.password.value,
          cPassword: formData.cPassword.value,
        }
      )
      .then((res) => {
        setFormData((prevData) => ({
          username: {
            value: !res.data.errors ? "" : prevData.username.value,
            errMsg: res.data.errors?.username?.message || "",
          },
          email: {
            value: !res.data.errors ? "" : prevData.email.value,
            errMsg: res.data.errors?.email?.message || "",
          },
          password: {
            value: !res.data.errors ? "" : prevData.password.value,
            errMsg: res.data.errors?.password?.message || "",
          },
          cPassword: {
            value: !res.data.errors ? "" : prevData.cPassword.value,
            errMsg: res.data.errors?.cPassword?.message || "",
          },
        }));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <LoginRegistration
        formData={formData}
        formState={formState}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
      <button onClick={formStateHandler}>
        {formState === "login"
          ? "Need an Account? (Register)"
          : "Have an Account? (Login)"}
      </button>
    </>
  );
};

export default AccountForm;
