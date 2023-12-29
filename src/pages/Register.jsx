import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";

function Register() {
  return (
    <>
      <div className="bg-[url('./images/backgroundPatern.png')] bg-indigo-900 bg-blend-multiply h-screen w-screen flex justify-center gap-20 items-center md:px-40 px-5">
        <div className="hidden">
          <h1 className="text-sm sm:text-4xl mb-4 w-96 text-slate-50 font-bold">
            Convert your Gift card and Crypto to cash
          </h1>
          <p className="text-wrap w-80 text-slate-200">
            Take pleasure in a flawless experience with our platform, where your
            peace of mind is ensure of mind is ensured by our commitment to safe
            and secure transactions.
          </p>
        </div>
        <form className="bg-slate-50 py-7 w-full px-7 sm:w-96 drop-shadow-xl rounded-md">
          <FormRow>
            <Input type="text" placeholder="First Name" />
          </FormRow>
          <FormRow>
            <Input type="text" placeholder="Last Name" />
          </FormRow>
          <FormRow>
            <Input type="email" placeholder="Email Address" />
          </FormRow>
          <FormRow>
            <Input type="tel" placeholder="Phone Number" />
          </FormRow>
          <FormRow>
            <Input type="password" placeholder="Password" />
          </FormRow>

          <Button type="secondary" onClick={() => alert("Register")}>
            Sign up
          </Button>

          <div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Already register account,{" "}
              <Link
                to="/login"
                className="text-lg text-slate-900 hover:underline transition-all duration-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
