import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import FormError from "../../ui/FormError";
import { useSignUp } from "./useSignUp";
import Spinner from "../../ui/Spinner";
import AuthBacground from "./AuthBacground";
import AuthBox from "./AuthBox";
import AuthHeader from "./AuthHeader";

function Register() {
  const { signup, isLoading } = useSignUp();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ firstName, lastName, email, phone, password }) {
    signup(
      { firstName, lastName, email, phone, password },
      {
        // onSettled: () => reset(),
        onSettled: () => reset(),
      }
    );
  }

  return (
    <>
      {isLoading && <Spinner />}
      <AuthBacground>
        <AuthBox>
          <AuthHeader>
          Please enter your information
          </AuthHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          
        >
          <FormRow>
            <input
              type="text"
              id="firstName"
              className="input"
              placeholder="First Name"
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
              {...register("password", {
                required: "This field is required",
                minLength: {
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
              disabled={isLoading}
              {...register("passwordCofirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
            <FormError>{errors?.passwordConfirm?.message}</FormError>
          </FormRow>

          <Button disabled={isLoading} type="secondary">
            Sign up
          </Button>

          <div className="flex items-center justify-between mt-3 text-sm">
           <p>Aready member? <Link to="/login" className="text-indigo-900 hover:text-indigo-600 duration-300 transition-colors">Login</Link></p>
           <Link to="/forget-password" className="text-slate-900 hover:text-indigo-600 duration-300 transition-colors">Forget Password</Link>
          </div>
         </form>
        </AuthBox>
      </AuthBacground>
    </>
  );
}

export default Register;
