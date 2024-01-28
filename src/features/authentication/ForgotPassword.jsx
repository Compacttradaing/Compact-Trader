/* eslint-disable react/no-unescaped-entities */
import Input from "../../ui/Input";
import FormError from "../../ui/FormError"
import FormRow from "../../ui/FormRow"
import AuthBacground from "./AuthBacground"
import AuthBox from "./AuthBox"
import AuthHeader from "./AuthHeader"
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import { Link } from "react-router-dom";

function ForgotPassword() {
   return (
      <AuthBacground>
         <AuthBox>
            <AuthHeader >
            <p className="w-60">Don't worry, we'll send you an email to reset your password.</p>
            </AuthHeader>
            <form>
              <FormRow>
               <Input
                 type="email"
                 placeholder="Email Address"
                required
            />
             <FormError>Please enter your email</FormError>
             </FormRow>
             <CheckBox/>
             <Button type="secondary">
            Sign in
             </Button>
             
           <div className="text-sm mt-3 flex items-center">
           <p>Don’t have an account?</p>
           <Link to="/register" className="text-indigo-900 hover:text-indigo-600 duration-300 transition-colors">Create An Account</Link>
           </div>
          
            </form>
         </AuthBox>
      </AuthBacground>
   )
}

export default ForgotPassword
