import { useState } from "react";
import { useForgotPassword } from "./useFogotPassword";
import Spinner from "../../ui/Spinner";
import AuthBacground from "./AuthBacground";
import AuthBox from "./AuthBox";
import AuthHeader from "./AuthHeader";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FormError from "../../ui/FormError";
import CheckBox from "../../ui/CheckBox";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useUpdatePassword } from "./useUpdatePassword";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updatePassword, isLoading } = useUpdatePassword();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    updatePassword(
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
          <form onSubmit={handleSubmit}>
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
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
              {!password && <FormError>Please enter your Password</FormError>}
            </FormRow>
            <CheckBox />
            <Button disabled={isLoading} type="secondary">
              Reset Password
            </Button>

            <div className="flex items-center justify-between mt-3 text-sm">
              <Link
                to="/register"
                className="text-indigo-900 hover:text-indigo-600 duration-300 transition-colors"
              >
                Create An Account
              </Link>
              <Link
                to="/login"
                className="text-slate-900 hover:text-indigo-600 duration-300 transition-colors"
              >
                Login
              </Link>
            </div>
          </form>
        </AuthBox>
      </AuthBacground>
    </>
  );
}

export default ResetPassword;
