import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Auth = () => {
  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode") || "signup";
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   setMode(initialMode);
  // }, [initialMode]);

  const navigate = useNavigate();
  const { signUp, user, login } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "login" ? "Login" : "Sign Up"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {user && <p>{user.email}</p>}
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be atleast 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must be less than 12 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
            <button className="btn btn-primary" type="submit">
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "login" ? (
              <p>
                Don't have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => {
                    navigate("/auth?mode=signup");
                  }}
                >
                  Sign up
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => {
                    navigate("/auth?mode=login");
                  }}
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
