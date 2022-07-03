import { ChangeEvent, useState } from "react";
//can be use for different forms, but should add more
//InitialValue Generic???
interface InitialValue {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  repeatPassword?: string;
  username?: string;
}

interface FormResult {
  handelInputChange(e: ChangeEvent<HTMLInputElement>): void;
  clearInputValue(): void;
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

  const clearInputValue = (): void => {
    setInputValue({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      username: "",
    });
  };

  return { handelInputChange, inputValue, clearInputValue };
};
