import { ChangeEvent, useState } from "react";
//can be use for diffrent forms, but should add more
interface InitialValue {
  password?: string;
  username?: string;
}

interface FormResult {
  handelInputChange(e: ChangeEvent<HTMLInputElement>): void;
  inputValue: InitialValue;
}

export const useForm = (initialValue: InitialValue): FormResult => {
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
