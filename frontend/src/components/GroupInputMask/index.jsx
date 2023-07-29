import { StyledInputMask } from "../../styles/inputsMask";
import { Typography } from "../../styles/typography";
import { StyledGroupInputMask } from "./styles";

export const GroupInputMask = ({
  label,
  placeholder,
  helperMessage,
  field,
  register,
  defaultValues,
  disabled = false,
  mask,
}) => {
  return (
    <StyledGroupInputMask>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <StyledInputMask
        placeholder={placeholder}
        mask={mask}
        {...register(field)}
        defaultValue={defaultValues[field]}
        disabled={disabled}
      />
      {helperMessage && (
        <Typography fonttype="helper" fontcolor="negative">
          {helperMessage}
        </Typography>
      )}
    </StyledGroupInputMask>
  );
};