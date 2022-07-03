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
const objectAttributes = {
  value: "",
  writable: true,
};
export const createInputValueObject = (
  inputValueObject: InputValueObject = {},
  propertyName: InputValueType
): InputValueObject => {
  return Object.defineProperty(
    inputValueObject,
    propertyName,
    objectAttributes
  );
};

export const buildRegisterFormObject = () => {
  let inputObject = createInputValueObject({}, InputValueType.FIRSTNAME);
  inputObject = createInputValueObject(inputObject, InputValueType.LASTNAME);
  inputObject = createInputValueObject(inputObject, InputValueType.EMAIL);
  inputObject = createInputValueObject(inputObject, InputValueType.USERNAME);
  inputObject = createInputValueObject(inputObject, InputValueType.PASSWORD);
  return createInputValueObject(inputObject, InputValueType.REPEATPASSWORD);
};

export const buildLoginFormObject = () => {
  const inputObject = createInputValueObject({}, InputValueType.USERNAME);
  return createInputValueObject(inputObject, InputValueType.PASSWORD);
};
