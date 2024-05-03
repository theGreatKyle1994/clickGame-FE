import axios from "axios";
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState<AccountFormData>({
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [formErrors, setFormErrors] = useState<AccountFormData>({
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/create-account", formData)
      .then((res) => {
        if (!res.data.errors) {
          setFormData({
            username: "",
            email: "",
            password: "",
            cPassword: "",
          });
        }
        setFormErrors({
          username: res.data.errors?.username?.message || "",
          email: res.data.errors?.email?.message || "",
          password: res.data.errors?.password?.message || "",
          cPassword: res.data.errors?.cPassword?.message || "",
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>{formErrors.username}</div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={changeHandler}
          id="username"
          name="username"
          type="text"
          value={formData.username}
        />
      </div>
      <div>
        <div>{formErrors.email}</div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={changeHandler}
          id="email"
          name="email"
          type="email"
          value={formData.email}
        />
      </div>
      <div>
        <div>{formErrors.password}</div>
        <label htmlFor="password">Password:</label>
        <input
          onChange={changeHandler}
          id="password"
          name="password"
          type="password"
          value={formData.password}
        />
      </div>
      <div>
        <div>{formErrors.cPassword}</div>
        <label htmlFor="c-password">Confirm Password:</label>
        <input
          onChange={changeHandler}
          id="c-password"
          name="cPassword"
          type="password"
          value={formData.cPassword}
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default Registration;
