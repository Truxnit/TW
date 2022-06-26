import React, { FormEvent, useState } from "react";
import { LoginPageLayout } from "./LoginPageLayout";
import { useForm } from "src/utils/hooks/useForm";
import styles from "src/Views/login/LoginPage.module.scss";

export const LoginPage: React.FC = () => {
  //need icon for display Password open Eye and close eyes svg or png???
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const { inputValue, handelInputChange } = useForm({
    password: "",
    username: "",
  });

  const title = <h2>Login</h2>;

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
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => handelInputChange(e)}
          placeholder="Nutzername"
          className=""
          name="username"
          value={inputValue.username}
          required={true}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Passwort:</label>
        <input
          type={displayPassword ? "text" : "password"}
          onChange={(e) => handelInputChange(e)}
          placeholder="Passwort"
          className=""
          name="password"
          value={inputValue.password}
          required={true}
        />
        <span onClick={() => setDisplayPassword(!displayPassword)}>Eye</span>
      </div>
      <button type="submit" className={styles.submitButton}>
        Absenden
      </button>
    </form>
  );

  return <LoginPageLayout title={title} loginForm={form} />;
};
