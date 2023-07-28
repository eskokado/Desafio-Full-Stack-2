import { StyledSelect } from "./styles";

export const Select = ({
  placeholder,
  register,
  field,
  defaultValues,
  disabled,
  options,
}) => {
  return (
    <StyledSelect
      placeholder={placeholder}
      {...register(field)}
      disabled={disabled}
    >
      {options.map((option) =>
        option.value === defaultValues[field] ? (
          <option key={option.value} value={option.value} selected>
            {option.text}
          </option>
        ) : (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        )
      )}
    </StyledSelect>
  );
};