import { Link } from "react-router-dom";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useState } from "react";
import { login } from "../services/apiAuth";
import { useLogin } from "../features/authentication/useLogin";
import Spinner from "../ui/Spinner";

function Login() {
  const [email, setEmail] = useState("jamiuabdulkareem08@gmail.com");
  const [password, setPassword] = useState("90903");
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
      <div className="bg-[url('./images/backgroundPatern.png')] bg-indigo-900 bg-blend-multiply h-screen w-screen flex justify-center gap-20 items-center px-5 sm:px-40">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 py-7 px-7 w-full sm:w-96 drop-shadow-xl rounded-md"
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
          </FormRow>

          <Button disabled={isLoading} type="secondary">
            Sign in
          </Button>

          <div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Create new account,{" "}
              <Link
                to="/register"
                className="text-lg text-slate-900 hover:underline transition-all duration-300"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

{
  /*  */
}
