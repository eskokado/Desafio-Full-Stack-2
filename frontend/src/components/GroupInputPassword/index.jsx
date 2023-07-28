import { InputPassword } from "../InputPassword";
import { Typography } from "../../styles/typography";
import { StyledGroupInputPassword } from "./styles";

export const GroupInputPassword = ({
  label,
  placeholder,
  helperMessage,
  field,
  register,
  defaultValues,
  disabled = false,
}) => {
  return (
    <StyledGroupInputPassword>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <InputPassword
        placeholder={placeholder}
        register={register}
        field={field}
        defaultValues={defaultValues}
        disabled={disabled}
      />
      {helperMessage && (
        <Typography fonttype="helper" fontcolor="negative">
          {helperMessage}
        </Typography>
      )}
    </StyledGroupInputPassword>
  );
};
