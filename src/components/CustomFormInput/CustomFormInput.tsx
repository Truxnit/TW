import React, { ReactNode } from "react";
import {
  InputType,
  InputValueObject,
  InputValueType,
} from "src/models/inputTypes";
import { useInput } from "src/utils/hooks/useInput";

interface CustomFormInputProps {
  inputType: InputType;
  placeholder: string;
  inputValueObject: InputValueObject;
  inputName: InputValueType;
  inputIcon?: ReactNode;
  labelText?: string;
  className?: string;
  isRequired?: boolean;
}
export const CustomFormInput: React.FC<CustomFormInputProps> = ({
  className,
  inputType,
  inputValueObject,
  inputName,
  placeholder,
  isRequired = false,
  inputIcon,
  labelText,
}) => {
  const { inputValue, handelInputChange } = useInput(inputValueObject);

  const withLabel = labelText && labelText.length > 0;
  const inputLabel = withLabel && (
    <label htmlFor={placeholder}>{labelText}:</label>
  );

  return (
    <div className={className}>
      {inputLabel}
      <input
        id={placeholder}
        type={inputType}
        onChange={(event) => handelInputChange(event)}
        placeholder={placeholder}
        name={inputName}
        value={inputValue[inputName]}
        required={isRequired}
      />
      {inputIcon}
    </div>
  );
};
