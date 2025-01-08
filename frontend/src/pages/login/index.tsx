import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
      registerLink={<div></div>}
      forgotPasswordLink={<div></div>}
      rememberMe={<div></div>}
    />
  );
};
