import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const { signUp, user, logout, login } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp({
        username: data.username,
        email: data.email,
        password: data.password,
      });
    } else {
      result = login(data.email, data.password);
    }
    if (!result.success) {
      setError(result.error);
    } else {
      navigate("/");
      setError(null);
    }
    console.log(result);
  }

  return (
    <div>
      <div className="page">
        <div className="container">
          <div className="Auth-container">
            {user && <p> {user.username}</p>}
            <h1 className="page-title">
              {mode === "signup" ? "Sign Up" : "Login"}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {error && <div className="input-error">{error}</div>}
              {mode === "signup" && (
                <div className="form-group">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    {...register("username", {
                      required: "Username is required",
                    })}
                    placeholder="Enter your name..."
                    type="text"
                    className="form-input"
                    id="username"
                  />
                  {errors.username && (
                    <p className="input-error">{errors.username.message}</p>
                  )}
                </div>
              )}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Enter you email address..."
                  type="email"
                  className="form-input"
                  id="email"
                />
                {errors.email && (
                  <p className="input-error">{errors.email.message} </p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be less than 12 characters.",
                    },
                  })}
                  placeholder="Enter your password..."
                  type="password"
                  autoComplete={
                    mode === "signup" ? "new-password" : "current-password"
                  }
                  className="form-input"
                  id="password"
                />
                {errors.password && (
                  <p className="input-error">{errors.password.message}</p>
                )}
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                {mode === "signup" ? "Sign Up" : "Login"}
              </button>
            </form>
            <div className="auth-switch">
              {mode === "signup" ? (
                <p>
                  Already have an account?{" "}
                  <span className="auth-link" onClick={() => setMode("login")}>
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <span className="auth-link" onClick={() => setMode("signup")}>
                    Sign Up
                  </span>
                </p>
              )}
            </div>
            {mode === "login" && (
              <div className="logout">
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                    setMode("signup");
                  }}
                  className="btn btn-primary"
                >
                  logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
