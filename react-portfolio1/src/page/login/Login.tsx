import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Login.css';

interface LoginForm {
  //userName: string,
  mailAddress: string,
  password: string
};

interface LoginErrorForm {
  //userName: string,
  mailAddress: string,
  password: string
};

const Login = () => {
  const initialValues: LoginForm = {
    //userName: "",
    mailAddress: "",
    password: "",
  };
  const initialLoginErrorValues: LoginErrorForm = {
    //userName: "",
    mailAddress: "",
    password: "",
  };

  const [formValues, setFormValues] = useState<LoginForm>(initialValues);
  const [formErrors, setFormErrors] = useState<LoginErrorForm>(initialLoginErrorValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    let changeValues: LoginForm;
    switch (name) {
      // case "userName":
      //   changeValues = { ...formValues, userName: value };
      //   break;
      case "mailAddress":
        changeValues = { ...formValues, mailAddress: value };
        break;
      case "password":
        changeValues = { ...formValues, password: value };
        break;
      default:
        changeValues = { ...formValues };
        break;
    }
    // setFormValues({ ...formValues, [name]: value});
    setFormValues(changeValues);
    console.log(changeValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // バリデーションチェック
    const validateResult = validate(formValues);
    setFormErrors(validateResult);

    // if (!validateResult.userName && !validateResult.mailAddress && !validateResult.password) {
    if (!validateResult.mailAddress && !validateResult.password) {
      console.log("ログイン成功");
      window.location.href = "/employees"
    } else {
      console.log("ログイン失敗");
    }
  }

  const validate = (values: LoginErrorForm): LoginErrorForm => {
    const errors: LoginErrorForm = initialLoginErrorValues;
    const regexMailAddress: RegExp = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const regexPassword: RegExp = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;

    // if (!values.userName) {
    //   errors.userName = "ユーザー名を入力してください。";
    // }
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください。";
    } else if (!regexMailAddress.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください。"
    } else if (values.mailAddress !== "test@gmail.com") {
      errors.mailAddress = "対象のメールアドレスのレコードが存在しません。"
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください。";
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください。";
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください。";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "半角英数記号のみ利用できます。";
    } else if (values.mailAddress === "test") {
      errors.mailAddress = "対象のパスワードのレコードが存在しません。"
    }

    return errors;
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          {/* <div className="formField">
            <label>ユーザー名</label>
            <input type="text" name="userName" placeholder='ユーザー名' onChange={(e) => handleChange(e)} />
          </div>
          <p className="errorMsg">{formErrors.userName}</p> */}
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" name="mailAddress" placeholder='test@gmail.com' onChange={(e) => handleChange(e)} />
          </div>
          <p className="errorMsg">{formErrors.mailAddress}</p>
          <div className="formField">
            <label>パスワード</label>
            <input type="password" name="password" placeholder='test' onChange={(e) => handleChange(e)} />
          </div>
          <p className="errorMsg">{formErrors.password}</p>

          <button className='submitButton'>ログイン</button>
        </div>
      </form>
    </div>
  )
}

export default Login