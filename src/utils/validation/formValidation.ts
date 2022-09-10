import {
  buildRegisterFormObject,
  InputValueObject,
  InputValueType,
} from "src/models/inputTypes";

export const validateRegister = (
  inputValues: InputValueObject
): InputValueObject => {
  const errors = buildRegisterFormObject();

  errors[InputValueType.EMAIL] = emailValidation(
    inputValues[InputValueType.EMAIL]
  );
  errors[InputValueType.USERNAME] = usernameValidation(
    inputValues[InputValueType.USERNAME]
  );
  errors[InputValueType.PASSWORD] = passwordValidation(
    inputValues[InputValueType.PASSWORD]
  );
  errors[InputValueType.REPEATPASSWORD] = repeatPasswordValidation(
    inputValues[InputValueType.PASSWORD],
    inputValues[InputValueType.REPEATPASSWORD]
  );

  return errors;
};

export const emailValidation = (value: string): string => {
  if (!value) {
    return "Email address is required!";
  }
  if (!new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "i").test(value)) {
    return "Input is not a valid email address!";
  }
  return "";
};

export const usernameValidation = (value: string): string => {
  if (!value) {
    return "Username is required!";
  }
  return "";
};
export const passwordValidation = (value: string): string => {
  if (!value) {
    return "Password is required!";
  }
  if (value.length < 10) {
    return "Password needs to be more than 10 characters!";
  }
  return "";
};

export const repeatPasswordValidation = (
  password: string,
  repatedPassword: string
): string => {
  if (!password) {
    return "Password is required!";
  }
  if (!repatedPassword) {
    return "Repeated password is required!";
  }
  if (password.localeCompare(repatedPassword) !== 0) {
    return "Repeated password must be the same as password!";
  }
  return "";
};
