import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import { useForm } from "react-hook-form";
import FormError from "../ui/FormError";
import { useSignUp } from "../features/authentication/useSignUp";

function Register() {
  const { signup, isLoading } = useSignUp();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ firstName, lastName, email, phone, password }) {
    signup(
      { firstName, lastName, email, phone, password },
      {
        onSettled: reset,
      }
    );
  }

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-50 py-7 w-full px-7 sm:w-96 drop-shadow-xl rounded-md"
        >
          <FormRow>
            <input
              type="text"
              id="firstName"
              className="input"
              placeholder="First Name"
              {...register("firstName", { required: "This field is required" })}
            />
            <FormError>{errors?.firstName?.message}</FormError>
          </FormRow>
          <FormRow>
            <input
              type="text"
              id="lastName"
              className="input"
              placeholder="Last Name"
              {...register("lastName", { required: "This field is required" })}
            />
            <FormError>{errors?.lastName?.message}</FormError>
          </FormRow>
          <FormRow>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Email Address"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            <FormError>{errors?.email?.message}</FormError>
          </FormRow>
          <FormRow>
            <input
              type="tel"
              id="phone"
              className="input"
              placeholder="Phone Number"
              {...register("phone", {
                required: "This field is required",
              })}
            />
            <FormError>{errors?.phoneNumber?.message}</FormError>
          </FormRow>
          <FormRow>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Password"
              {...register("password", {
                required: "This field is required",
                maxLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
            <FormError>{errors?.password?.message}</FormError>
          </FormRow>

          <FormRow>
            <input
              type="password"
              id="passwordConfirm"
              className="input"
              placeholder="Confirm Password"
              {...register("passwordCofirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
            <FormError>{errors?.passwordConfirm?.message}</FormError>
          </FormRow>

          <Button type="secondary">Sign up</Button>

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
