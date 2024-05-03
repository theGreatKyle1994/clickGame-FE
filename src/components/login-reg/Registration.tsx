const Registration = (props: FormProps) => {
  const { formData, submitHandler, changeHandler } = props;
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>{formData.username.errMsg}</div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={changeHandler}
          id="username"
          name="username"
          type="text"
          value={formData.username.value}
        />
      </div>
      <div>
        <div>{formData.email.errMsg}</div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={changeHandler}
          id="email"
          name="email"
          type="email"
          value={formData.email.value}
        />
      </div>
      <div>
        <div>{formData.password.errMsg}</div>
        <label htmlFor="password">Password:</label>
        <input
          onChange={changeHandler}
          id="password"
          name="password"
          type="password"
          value={formData.password.value}
        />
      </div>
      <div>
        <div>{formData.cPassword.errMsg}</div>
        <label htmlFor="c-password">Confirm Password:</label>
        <input
          onChange={changeHandler}
          id="c-password"
          name="cPassword"
          type="password"
          value={formData.cPassword.value}
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default Registration;
