import React, { FormEvent, useState } from "react";
import { LoginPageLayout } from "./LoginPageLayout";
import styles from "src/Views/login/LoginPage.module.scss";
import { useTranslation } from "src/i18n";
import { ReactComponent as EyeClosed } from "src/assets/images/svg/eye-close.svg";
import { ReactComponent as EyeOpen } from "src/assets/images/svg/eye-open.svg";
import { useDocumentTitle } from "src/utils/hooks/useDocumentTitle";
import { CustomFormInput } from "src/components/CustomFormInput/CustomFormInput";
import {
  buildLoginFormObject,
  InputValueObject,
  InputValueType,
} from "src/models/inputTypes";
import { useForm } from "src/utils/hooks/useForm";
import { validateRegister } from "src/utils/validation/formValidation";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useDocumentTitle(t("loginPage.title"));
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const { inputValue, handelInputChange } = useForm(buildLoginFormObject());
  const [errors, setErrors] = useState<InputValueObject | null>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setErrors(null);
    const errors = validateRegister(inputValue);
    if (errors[InputValueType.PASSWORD] || errors[InputValueType.USERNAME]) {
      setErrors(errors);
    } else {
      // call endpoint for register
      //success navigate to main page
      navigate("/");
    }
    /*
 Here need validation
  const username = e.currentTarget.elements.namedItem(
      InputValueType.USERNAME
    ) as HTMLInputElement;
    const password = e.currentTarget.elements.namedItem(
      InputValueType.PASSWORD
    ) as HTMLInputElement;

    console.log(username.value, password.value);*/
  };

  const title = <h2>{t("loginPage.title")}</h2>;

  const passwordEyeIcon = !displayPassword ? (
    <EyeClosed
      onClick={() => setDisplayPassword(!displayPassword)}
      data-testid={"eyeClosed"}
    />
  ) : (
    <EyeOpen
      onClick={() => setDisplayPassword(!displayPassword)}
      data-testid={"eyeOpen"}
    />
  );

  const form = (
    <form className={styles.loginForm} onSubmit={submitHandler}>
      <CustomFormInput
        className={styles.loginInputContainer}
        labelText={t("loginPage.username")}
        inputName={InputValueType.USERNAME}
        inputValueObject={inputValue}
        inputType={"text"}
        changeEvent={handelInputChange}
        placeholder={t("loginPage.username")}
        errorMessage={errors && errors[InputValueType.USERNAME]}
      />
      <CustomFormInput
        className={styles.loginInputContainer}
        labelText={t("loginPage.password")}
        inputIcon={passwordEyeIcon}
        inputName={InputValueType.PASSWORD}
        inputType={displayPassword ? "text" : "password"}
        inputValueObject={inputValue}
        changeEvent={handelInputChange}
        placeholder={t("loginPage.password")}
        errorMessage={errors && errors[InputValueType.PASSWORD]}
      />
      <button type="submit" className={styles.loginButton}>
        {t("button.loginPage.confirm")}
      </button>
    </form>
  );

  return <LoginPageLayout title={title} loginForm={form} />;
};
