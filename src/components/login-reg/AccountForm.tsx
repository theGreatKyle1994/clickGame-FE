import axios from "axios";
import { useState } from "react";
import Registration from "./Registration";

const AccountForm = () => {
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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        errMsg: prevData[name as keyof AccountFormData].errMsg,
        value,
      },
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/create-account", {
        username: formData.username.value,
        email: formData.email.value,
        password: formData.password.value,
        cPassword: formData.cPassword.value,
      })
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
      <Registration
        formData={formData}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
    </>
  );
};

export default AccountForm;
