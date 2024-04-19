import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  return (
    <div className="loginform-wrapper">
      <p className="loginform-name">Login form</p>
      <div className="inputs-container">
        <Input
          name="login-email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="login-password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button type="submit" name="Login" />
    </div>
  );
}

export default LoginForm;
