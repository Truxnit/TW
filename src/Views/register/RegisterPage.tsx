import React, { FormEvent } from "react";
import { RegisterPageLayout } from "src/Views/register/RegisterPageLayout";
import { useTranslation } from "src/i18n";
import { useDocumentTitle } from "src/utils/hooks/useDocumentTitle";
import styles from "src/Views/register/RegisterPage.module.scss";
import { CustomFormInput } from "src/components/CustomFormInput/CustomFormInput";
import { createInputValueObject, InputValueType } from "src/models/inputTypes";

//Todo Reset
export const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  useDocumentTitle(t("registerPage.title"));

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
    //navigate to Main page
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
        inputValueObject={createInputValueObject({}, InputValueType.FIRSTNAME)}
        inputType={"text"}
        placeholder={t("registerPage.firstName")}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.lastName")}
        inputName={InputValueType.LASTNAME}
        inputValueObject={createInputValueObject({}, InputValueType.LASTNAME)}
        inputType={"text"}
        placeholder={t("registerPage.lastName")}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.email")}
        inputName={InputValueType.EMAIL}
        inputValueObject={createInputValueObject({}, InputValueType.EMAIL)}
        inputType={"email"}
        placeholder={t("registerPage.email")}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.username")}
        inputName={InputValueType.USERNAME}
        inputValueObject={createInputValueObject({}, InputValueType.USERNAME)}
        inputType={"text"}
        placeholder={t("registerPage.username")}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.password")}
        inputName={InputValueType.PASSWORD}
        inputValueObject={createInputValueObject({}, InputValueType.PASSWORD)}
        inputType={"password"}
        placeholder={t("registerPage.password")}
      />
      <CustomFormInput
        className={styles.registerInputContainer}
        labelText={t("registerPage.repeatPassword")}
        inputName={InputValueType.REPEATPASSWORD}
        inputValueObject={createInputValueObject(
          {},
          InputValueType.REPEATPASSWORD
        )}
        inputType={"password"}
        placeholder={t("registerPage.repeatPassword")}
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
