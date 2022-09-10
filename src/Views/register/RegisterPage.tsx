import React, { FormEvent, useState } from "react";
import { RegisterPageLayout } from "src/Views/register/RegisterPageLayout";
import { useTranslation } from "src/i18n";
import { useDocumentTitle } from "src/utils/hooks/useDocumentTitle";
import styles from "src/Views/register/RegisterPage.module.scss";
import { CustomFormInput } from "src/components/CustomFormInput/CustomFormInput";
import {
  buildRegisterFormObject,
  InputValueObject,
  InputValueType,
} from "src/models/inputTypes";
import { useForm } from "src/utils/hooks/useForm";
import { validateRegister } from "src/utils/validation/formValidation";

export const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  const { inputValue, handelInputChange, resetInputValue } = useForm(
    buildRegisterFormObject()
  );
  const [errors, setErrors] = useState<InputValueObject | null>(null);

  useDocumentTitle(t("registerPage.title"));

  const pageTitle = <h2>{t("registerPage.title")}</h2>;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setErrors(null);
    const errors = validateRegister(inputValue);
    if (
      errors[InputValueType.EMAIL] ||
      errors[InputValueType.USERNAME] ||
      errors[InputValueType.PASSWORD] ||
      errors[InputValueType.REPEATPASSWORD]
    ) {
      setErrors(errors);
    } else {
      // call endpoint for register
      //success navigate to main page
    }
  };

  const resetHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    //navigate to Main page
    resetInputValue();
  };

  const registerForm = (
    <form
      className={styles.registerForm}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.firstName")}
        inputName={InputValueType.FIRSTNAME}
        inputValueObject={inputValue}
        changeEvent={handelInputChange}
        inputType={"text"}
        placeholder={t("registerPage.firstName")}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.lastName")}
        inputName={InputValueType.LASTNAME}
        inputValueObject={inputValue}
        changeEvent={handelInputChange}
        inputType={"text"}
        placeholder={t("registerPage.lastName")}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.email")}
        inputName={InputValueType.EMAIL}
        inputValueObject={inputValue}
        changeEvent={handelInputChange}
        inputType={"email"}
        placeholder={t("registerPage.email")}
        errorMessage={errors && errors[InputValueType.EMAIL]}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.username")}
        inputName={InputValueType.USERNAME}
        inputValueObject={inputValue}
        changeEvent={handelInputChange}
        inputType={"text"}
        placeholder={t("registerPage.username")}
        errorMessage={errors && errors[InputValueType.USERNAME]}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.password")}
        inputName={InputValueType.PASSWORD}
        inputValueObject={inputValue}
        changeEvent={handelInputChange}
        inputType={"password"}
        placeholder={t("registerPage.password")}
        errorMessage={errors && errors[InputValueType.PASSWORD]}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.repeatPassword")}
        inputName={InputValueType.REPEATPASSWORD}
        inputValueObject={inputValue}
        changeEvent={handelInputChange}
        inputType={"password"}
        placeholder={t("registerPage.repeatPassword")}
        errorMessage={errors && errors[InputValueType.REPEATPASSWORD]}
      />
      <button type="submit" className={styles.registerButton}>
        {t("button.registerPage.confirm")}
      </button>
      <button type="reset" className={styles.cancelButton}>
        {t("button.registerPage.cancel")}
      </button>
    </form>
  );

  return <RegisterPageLayout title={pageTitle} registerForm={registerForm} />;
};
