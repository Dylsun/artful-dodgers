// this is our login component
//we import formik here for our login form control
//we also import yup which allows us to validate our entries quite easily
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Button } from "react-bootstrap";
import "../stylesheets/Login.css";

const Login = ({ setLoggedInUser }) => {
  //in our login component we set up the yup validationSchema
  //where we simply want to validate that input has been put in
  //and we make sure the password is 8 characters long
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });
  //this is where we handle the rendering of our login component
  return (
    <Container className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          //this is where we set the logged in user based on the input
          setLoggedInUser(values.username);
          setSubmitting(false);
        }}
      >
        {/* this is where we handle the actual form 
        we set the user name type to text, the password type is password
        and we include the submission button at the bottom*/}
        {({ isSubmitting }) => (
          <Form>
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

            <Button
              className="custom-button"
              type="submit"
              variant="primary"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
