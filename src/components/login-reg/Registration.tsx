import axios from "axios";
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState<AccountFormData>({
    username: "",
    email: "",
    password: "",
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
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={changeHandler}
          id="username"
          name="username"
          type="text"
          value={formData.username}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={changeHandler}
          id="email"
          name="email"
          type="email"
          value={formData.email}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          onChange={changeHandler}
          id="password"
          name="password"
          type="password"
          value={formData.password}
          required
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default Registration;
