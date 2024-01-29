import { useState } from "react";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Modal from "../../ui/Modal";
import { useUpdatePassword } from "../authentication/useUpdatePassword";
import FormError from "../../ui/FormError";
import Button from "../../ui/Button";

function UpdatePasswordModal({ onClose }) {
  const [email, setEmail] = useState();
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
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Input
            type="email"
            placeholder="New Email Address"
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
        <Button disabled={isLoading} type="secondary">
          Change Password
        </Button>
      </form>
    </Modal>
  );
}

export default UpdatePasswordModal;
