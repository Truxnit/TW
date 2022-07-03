import React, { FormEvent, useState } from "react";
import { RegisterPageLayout } from "src/Views/register/RegisterPageLayout";
import { useTranslation } from "src/i18n";
import { useDocumentTitle } from "src/utils/hooks/useDocumentTitle";
import styles from "src/Views/login/LoginPage.module.scss";
import { ReactComponent as EyeClosed } from "src/assets/images/svg/eye-close.svg";
import { ReactComponent as EyeOpen } from "src/assets/images/svg/eye-open.svg";
import { useForm } from "src/utils/hooks/useForm";

export const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  useDocumentTitle(t("registerPage.title"));
  const { inputValue, handelInputChange, clearInputValue } = useForm({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    username: "",
  });

  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const pageTitle = <h2>{t("registerPage.title")}</h2>;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    /*    console.log("Hello");
    console.log("Hello: ", inputValue.username);
    console.log("Hello: ", inputValue.password);*/
  };
  const resetHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    clearInputValue();
    setDisplayPassword(false);
  };

  const registerForm = (
    <form
      className={styles.loginForm}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <div className={styles.inputContainer}>
        <label htmlFor={"registerFirstName"}>
          {t("registerPage.firstName")}:
        </label>
        <input
          id={"registerFirstName"}
          type="text"
          onChange={(e) => handelInputChange(e)}
          placeholder={t("registerPage.firstName")}
          className=""
          name="firstName"
          value={inputValue.firstName}
          required={true}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={"registerLastName"}>
          {t("registerPage.lastName")}:
        </label>
        <input
          id={"registerLastName"}
          type="text"
          onChange={(e) => handelInputChange(e)}
          placeholder={t("registerPage.lastName")}
          className=""
          name="lastName"
          value={inputValue.lastName}
          required={true}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={"registerEMail"}>{t("registerPage.email")}:</label>
        <input
          id={"registerEMail"}
          type="email"
          onChange={(e) => handelInputChange(e)}
          placeholder={t("registerPage.email")}
          className=""
          name="email"
          value={inputValue.email}
          required={true}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={"registerUserName"}>
          {t("registerPage.username")}:
        </label>
        <input
          id={"registerUserName"}
          type="text"
          onChange={(e) => handelInputChange(e)}
          placeholder={t("registerPage.username")}
          className=""
          name="username"
          value={inputValue.username}
          required={true}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={"registerPassword"}>
          {t("registerPage.password")}:
        </label>
        <input
          id={"registerPassword"}
          type={displayPassword ? "text" : "password"}
          onChange={(e) => handelInputChange(e)}
          placeholder={t("registerPage.password")}
          className=""
          name="password"
          value={inputValue.password}
          required={true}
        />
        {!displayPassword ? (
          <EyeClosed
            onClick={() => setDisplayPassword(!displayPassword)}
            data-testid={"eyeClosed"}
          />
        ) : (
          <EyeOpen
            onClick={() => setDisplayPassword(!displayPassword)}
            data-testid={"eyeOpen"}
          />
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={"registerRepeatPassword"}>
          {t("registerPage.repeatPassword")}:
        </label>
        <input
          id={"registerRepeatPassword"}
          type={"password"}
          onChange={(e) => handelInputChange(e)}
          placeholder={t("registerPage.repeatPassword")}
          className=""
          name="repeatPassword"
          value={inputValue.repeatPassword}
          required={true}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        {t("button.registerPage.confirm")}
      </button>
      <button type="reset" className={styles.submitButton}>
        {t("button.registerPage.cancel")}
      </button>
    </form>
  );

  return <RegisterPageLayout title={pageTitle} registerForm={registerForm} />;
};
