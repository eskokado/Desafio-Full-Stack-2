import { StyledInputCurrency } from "../../styles/inputsCurrency";
import { Typography } from "../../styles/typography";
import { StyledGroupInputCurrency } from "./styles";

export const GroupInputCurrency = ({
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
    <StyledGroupInputCurrency>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <StyledInputCurrency
        placeholder={placeholder}
        decimalSeparator='.'
        groupSeparator=','
        prefix='R$ '
        {...register(field)}
        defaultValue={defaultValues[field]}
        disabled={disabled}
      />
      {helperMessage && (
        <Typography fonttype="helper" fontcolor="negative">
          {helperMessage}
        </Typography>
      )}
    </StyledGroupInputCurrency>
  );
};