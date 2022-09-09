import { ChangeEvent, useState } from "react";
import { InputValueObject } from "src/models/inputTypes";

interface FormResult {
  inputValue: InputValueObject;
  resetInputValue(): void;
  handelInputChange(e: ChangeEvent<HTMLInputElement>): void;
}

export const useForm = (initialValue: InputValueObject = {}): FormResult => {
  const [inputValue, setInputValue] = useState<InputValueObject>(initialValue);
  //const [errors, setErrors] = useState<InputValueObject>(initialValue);

  const handelInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setInputValue((inputValue) => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const resetInputValue = (): void => {
    setInputValue(initialValue);
  };

  return { handelInputChange, inputValue, resetInputValue };
};
