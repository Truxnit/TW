import React, { FormEvent, useState } from "react";
import { LoginPageLayout } from "./LoginPageLayout";
import { useForm } from "src/utils/hooks/useForm";
import styles from "src/Views/login/LoginPage.module.scss";
import { useTranslation } from "src/i18n";
import { ReactComponent as EyeClosed } from "src/assets/images/svg/eye-close.svg";
import { ReactComponent as EyeOpen } from "src/assets/images/svg/eye-open.svg";
import { useDocumentTitle } from "src/utils/hooks/useDocumentTitle";

export const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  useDocumentTitle(t("loginPage.title"));
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const { inputValue, handelInputChange } = useForm({
    password: "",
    username: "",
  });

  const title = <h2>{t("loginPage.title")}</h2>;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    /*    console.log("Hello");
    console.log("Hello: ", inputValue.username);
    console.log("Hello: ", inputValue.password);*/
  };

  const form = (
    <form className={styles.loginForm} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <label htmlFor={"inputUsername"}>{t("loginPage.username")}:</label>
        <input
          id={"inputUsername"}
          type="text"
          onChange={(e) => handelInputChange(e)}
          placeholder={t("loginPage.username")}
          className=""
          name="username"
          value={inputValue.username}
          required={true}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={"inputPassword"}>{t("loginPage.password")}:</label>
        <input
          id={"inputPassword"}
          type={displayPassword ? "text" : "password"}
          onChange={(e) => handelInputChange(e)}
          placeholder={t("loginPage.password")}
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
      <button type="submit" className={styles.submitButton}>
        {t("button.loginPage.confirm")}
      </button>
    </form>
  );

  return <LoginPageLayout title={title} loginForm={form} />;
};
