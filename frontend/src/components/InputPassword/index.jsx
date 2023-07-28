import React, { useState } from "react";
import { StyledInput } from "../../styles/inputs";
import { StyledInputPassword } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

export const InputPassword = ({
  placeholder,
  field,
  register,
  defaultValues,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledInputPassword>
      <StyledInput
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register(field)}
        defaultValues={defaultValues}
        disabled={disabled}
      />
      <i onClick={onShowPassword}>{eye}</i>
    </StyledInputPassword>
  );
};