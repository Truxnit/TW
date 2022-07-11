export type InputType = "text" | "password" | "email";

export type InputValueObject = { [key: string]: string };

export enum InputValueType {
  USERNAME = "username",
  PASSWORD = "password",
  FIRSTNAME = "firstName",
  LASTNAME = "lastName",
  EMAIL = "email",
  REPEATPASSWORD = "repeatPassword",
}

export const buildRegisterFormObject = () => {
  return {
    [InputValueType.FIRSTNAME]: "",
    [InputValueType.LASTNAME]: "",
    [InputValueType.EMAIL]: "",
    [InputValueType.USERNAME]: "",
    [InputValueType.PASSWORD]: "",
    [InputValueType.REPEATPASSWORD]: "",
  };
};

export const buildLoginFormObject = () => {
  return {
    [InputValueType.USERNAME]: "",
    [InputValueType.PASSWORD]: "",
  };
};
