import { Link } from "react-router-dom";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

function Login() {
  return (
    <>
      <div className="bg-[url('./assets/images/backgroundPatern.png')] bg-indigo-900 bg-blend-multiply h-screen w-screen flex justify-center gap-20 items-center px-5 sm:px-40">
        <form className="bg-slate-50 py-7 px-7 w-full sm:w-96 drop-shadow-xl rounded-md">
          <FormRow>
            <Input type="email" placeholder="Email Address" />
          </FormRow>
          <FormRow>
            <Input type="password" placeholder="Password" />
          </FormRow>

          <Button type="secondary" onClick={() => alert("Login")}>
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
