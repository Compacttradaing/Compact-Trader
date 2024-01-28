import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useState } from "react";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";
import AuthBacground from "./AuthBacground";
import AuthBox from "./AuthBox";
import AuthHeader from "./AuthHeader";
import CheckBox from "../../ui/CheckBox";
import FormError from "../../ui/FormError";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <>
      {isLoading && <Spinner />}
      <AuthBacground>
       <AuthBox>
        <AuthHeader>Please enter your login information</AuthHeader>
       <form
          onSubmit={handleSubmit}
          
        >
          <FormRow>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
            {!email && <FormError>Please enter your email</FormError>}
          </FormRow>
          <FormRow>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
            {!password && <FormError>Please enter your Password</FormError>}
          </FormRow>
          <CheckBox/>
          <Button disabled={isLoading} type="secondary">
            Sign in
          </Button>

          <div className="flex items-center justify-between mt-3 text-sm">
           <Link to="/register" className="text-indigo-900 hover:text-indigo-600 duration-300 transition-colors">Create An Account</Link>
           <Link to="/register" className="text-slate-900 hover:text-indigo-600 duration-300 transition-colors">Forget Password</Link>
          </div>
        </form>
       </AuthBox>
      </AuthBacground>
    </>
  );
}

export default Login;

{
  /*  */
}
