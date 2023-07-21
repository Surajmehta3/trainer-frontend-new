import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// import axios from "axios";
import "./Login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = "https://trainer-portal.surajmehta6.repl.co/authenticate";
    const authenticate = async () => {
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      console.log(res)

      if (res.status === 200 && res.ok) {
        navigate("/dashboard");
      } 
    };
    authenticate();
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const url = "https://trainer-portal.surajmehta6.repl.co/login";
    const data = {
      email: values.email,
      password: values.password,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    // console.log(res.status);

    if (res.status === 200 && res.ok) {
      navigate("/");
    }
    // console.log(response.headers)
    // const data1 = await response.json()

    // const expirationTime = new Date(Date.now() + 3600000)
    // document.cookie = `token=${data1.token};path=/;expires=${expirationTime}`
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
