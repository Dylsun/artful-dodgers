// this is our Register component and uses formik and yup
//both the register component and login component share the Login.css
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Button } from "react-bootstrap";
import "../stylesheets/Login.css";

const Register = () => {
  /*inside our register componenent we set up the yup validation schema
  we use the email validation rule to make sure its a valid email address
  we get the name and the surname of our users they choose a username
  and we have a password which must be at least 8 characters
  we also do a password confirmation where we make sure the password matches
   the confirm password field*/
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    name: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });
  //then we handle the rendering of our component here
  return (
    <Container className="register-container">
      <h2>Register</h2>
      {/* set up the forms inital values and run the validation
      schema against submissions*/}
      <Formik
        initialValues={{
          email: "",
          name: "",
          surname: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form data", values);
        }}
      >
        {/* then we handle the actual form fields*/}
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                id="email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                id="name"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <Field
                type="text"
                name="surname"
                className="form-control"
                id="surname"
              />
              <ErrorMessage name="surname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                name="username"
                className="form-control"
                id="username"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                id="password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="form-control"
                id="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>

            <Button
              className="custom-button"
              type="submit"
              variant="primary"
              disabled={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
