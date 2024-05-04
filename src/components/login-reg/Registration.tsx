const LoginRegistration: React.FunctionComponent<LoginRegistrationProps> = (
  props: LoginRegistrationProps
): React.JSX.Element => {
  const { formData, submitHandler, changeHandler, formState } = props;
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
      {formState === "register" && (
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
      )}
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
      {formState === "register" && (
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
      )}
      <button type="submit">
        {formState === "login" ? "Login" : "Create Account"}
      </button>
    </form>
  );
};

export default LoginRegistration;
