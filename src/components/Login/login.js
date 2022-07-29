import React from "react";
import "../Login/login.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="login_div shadow">
        <div className="login_form p-4">
          <h2>Log In</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <button className="btn btn-danger mt-2 w-100">
              Signup with Google
            </button>
            <button className="btn btn-primary mt-2 w-100">
              Signup with Facebook
            </button>
            <div className="email m-3">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                size="small"
                className="ms-1 w-100"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="password m-3">
              {/* <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name="password"
                size="small"
                className="ms-1 w-100"
                onChange={this.handleChange}
                noValidate
              /> */}
              <TextField
                ref="password"
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name="password"
                size="small"
                className="ms-1 w-100"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="submit">
              <Link to="/">
              <button
                className="btn btn-outline-success w-100 ms-1"
                style={{ backgroundColor: "#66A500", color: "white" }}
              >
               Log in
              </button>
              </Link>
            </div>
            <div className="">
              <p className="text-dark fw-bold mt-3 text-center">
                Don't have an account?,
                <Link to="/signup" className="text-decoration-none">
                  {" "}
                  Create Account here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
