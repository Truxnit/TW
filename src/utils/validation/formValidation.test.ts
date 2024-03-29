import {
  emailValidation,
  passwordValidation,
  repeatPasswordValidation,
  usernameValidation,
} from "src/utils/validation/formValidation";

const matchingEmails = ["muster@gmx.de"];

const mismatchingEmails = [
  "muster.gmx.de",
  "muster@@gmx.de",
  "muster@gmx@de",
  "muster gmx@de",
];
describe("Valditaion", () => {
  describe("Email validation", () => {
    it.each(matchingEmails)(
      "returns emtpy string if given email matches RegExp",
      (email) => {
        const errorMessage = emailValidation(email);
        expect(errorMessage).toEqual("");
      }
    );
    it.each(mismatchingEmails)(
      "returns 'Input is not a valid email address!' if given email matches not RegExp",
      (email) => {
        const errorMessage = emailValidation(email);
        expect(errorMessage).toEqual("Input is not a valid email address!");
      }
    );
    it("returns 'Email address is required!' if given email string is emtpy", () => {
      const errorMessage = emailValidation("");
      expect(errorMessage).toEqual("Email address is required!");
    });
  });
  describe("Username validation", () => {
    it("returns emtpy string if given email matches RegExp", () => {
      const errorMessage = usernameValidation("testuser");
      expect(errorMessage).toEqual("");
    });

    it("returns 'Username is required!' if given username string is emtpy", () => {
      const errorMessage = usernameValidation("");
      expect(errorMessage).toEqual("Username is required!");
    });
  });
  describe("Password validation", () => {
    it("returns emtpy string if given password matches validation", () => {
      const errorMessage = passwordValidation("password10");
      expect(errorMessage).toEqual("");
    });
    it("returns 'Password needs to be more than 10 characters!' if given password shorter than 10 characters", () => {
      const errorMessage = passwordValidation("123456789");
      expect(errorMessage).toEqual(
        "Password needs to be more than 10 characters!"
      );
    });
    it("returns 'Password address is required!' if given password string is emtpy", () => {
      const errorMessage = passwordValidation("");
      expect(errorMessage).toEqual("Password is required!");
    });
  });
  describe("Repeated password validation", () => {
    it("returns emtpy string if repeated password matches password", () => {
      const errorMessage = repeatPasswordValidation("password10", "password10");
      expect(errorMessage).toEqual("");
    });
    it("returns 'Repeated password must be the same as password!' if given password not equal to repeated password", () => {
      const errorMessage = repeatPasswordValidation("password10", "password11");
      expect(errorMessage).toEqual(
        "Repeated password must be the same as password!"
      );
    });
    it("returns 'Password address is required!' if given password string is emtpy and repeated password given", () => {
      const errorMessage = repeatPasswordValidation("", "password10");
      expect(errorMessage).toEqual("Password is required!");
    });
    it("returns 'Repeated password is required!' if password is given but repeated password is empty", () => {
      const errorMessage = repeatPasswordValidation("password10", "");
      expect(errorMessage).toEqual("Repeated password is required!");
    });
  });
});
