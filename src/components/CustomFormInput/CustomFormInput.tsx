import React, { ChangeEvent, ReactNode } from "react";
import {
  InputType,
  InputValueObject,
  InputValueType,
} from "src/models/inputTypes";

interface CustomFormInputProps {
  inputType: InputType;
  placeholder: string;
  inputValueObject: InputValueObject;
  inputName: InputValueType;
  inputIcon?: ReactNode;
  labelText?: string;
  className?: string;
  isRequired?: boolean;
  changeEvent?: (changeEvent: ChangeEvent<HTMLInputElement>) => void;
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
  changeEvent,
}) => {
  const withLabel = labelText && labelText.length > 0;
  const inputLabel = withLabel && (
    <label htmlFor={placeholder}>{labelText}:</label>
  );

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (changeEvent) {
      changeEvent(event);
    }
  };

  return (
    <div className={className}>
      {inputLabel}
      <input
        id={placeholder}
        type={inputType}
        onChange={(event) => changeHandler(event)}
        placeholder={placeholder}
        name={inputName}
        value={inputValueObject[inputName]}
        required={isRequired}
      />
      {inputIcon}
    </div>
  );
};
