import { StyledInput } from "../../styles/inputs";
import { Typography } from "../../styles/typography";
import { StyledGroupInput } from "./styles";

export const GroupInput = ({
  label,
  placeholder,
  helperMessage,
  field,
  register,
  defaultValues,
  disabled = false,
}) => {
  return (
    <StyledGroupInput>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <StyledInput
        placeholder={placeholder}
        {...register(field)}
        defaultValue={defaultValues[field]}
        disabled={disabled}
      />
      {helperMessage && (
        <Typography fonttype="helper" fontcolor="negative">
          {helperMessage}
        </Typography>
      )}
    </StyledGroupInput>
  );
};