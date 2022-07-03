import { ChangeEvent, useState } from "react";
import { InputValueObject } from "src/models/inputTypes";

interface InputResult {
  handelInputChange(e: ChangeEvent<HTMLInputElement>): void;
  inputValue: InputValueObject;
}

export const useInput = (initialValue: InputValueObject = {}): InputResult => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handelInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setInputValue((inputValue) => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  return { handelInputChange, inputValue };
};
