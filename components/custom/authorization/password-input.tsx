import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input } from "~/components/ui/input";

function PasswordInput({ ...field }) {
  const [passwordType, setPasswordType] = useState("password");

  const handleSwitchPasswordType = () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="relative flex items-center">
      {" "}
      <Input
        className="bg-dark-gray"
        type={passwordType}
        placeholder="Password"
        {...field}
      />{" "}
      {passwordType === "password" ? (
        <EyeOff
          className="absolute right-6 size-[18px] lg:size-6"
          onClick={handleSwitchPasswordType}
        />
      ) : (
        <Eye
          className="absolute right-6 size-[18px] lg:size-6"
          onClick={handleSwitchPasswordType}
        />
      )}
    </div>
  );
}

export default PasswordInput;
