import React, { useEffect, useState } from "react";
import {
  HeaderSubText,
  HeaderText,
  LoginBody,
  LoginButton,
  LoginContainer,
  LoginFooter,
  LoginHeader,
  LoginScreenBody,
  LoginScreenContainer,
  LoginScreenHeader,
  Logo,
  LogoContainer,
  LoginTitle,
  LoginOptions,
  RememberContainer,
  RememberDiv,
  LoginOption,
  ForgotPasswordLink,
  LoginSubmitButton,
  GoogleLoginButton,
  LoaderContainer,
} from "./styles";
import lolLogo from "../../assets/lol-logo.png";

import CheckIcon from "@mui/icons-material/Check";
import GoogleIcon from "@mui/icons-material/Google";
import { useQuery } from "react-query";
import { Loader } from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const { data, isLoading, isError, error } = useQuery(["userInfo"], () => {
    return;
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldsFilled, setFieldsFilled] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (email.trim() === "" || password.trim() === "") {
      event.preventDefault();
      return;
    } else {
      navigate("/home");
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  useEffect(() => {
    if (email.trim() !== "" && password.trim() !== "") {
      setFieldsFilled(true);
    } else {
      setFieldsFilled(false);
    }
  }, [email, password]);

  if (isLoading)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  else if (isError) return <div>Something went wrong: {error as string} </div>;
  return (
    <LoginScreenContainer>
      <LoginScreenHeader>
        <LogoContainer>
          <Logo src={lolLogo} alt="league-of-legends-logo" />
        </LogoContainer>
      </LoginScreenHeader>

      <LoginScreenBody>
        <LoginContainer>
          <LoginHeader>
            <HeaderText>Welcome</HeaderText>
            <HeaderSubText>Please enter your detail</HeaderSubText>
          </LoginHeader>

          <LoginBody>
            <form>
              <LoginTitle>Email</LoginTitle>
              <LoginButton
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <LoginTitle>Password</LoginTitle>
              <LoginButton
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </form>
            <LoginOptions>
              <RememberContainer>
                <RememberDiv>
                  <CheckIcon fontSize="small" />
                </RememberDiv>
                <LoginOption>Remember me</LoginOption>
              </RememberContainer>
              <ForgotPasswordLink>Forgot password</ForgotPasswordLink>
            </LoginOptions>
          </LoginBody>

          <LoginFooter>
            <LoginSubmitButton
              type="submit"
              value="Log in"
              disabled={!fieldsFilled}
              onClick={
                handleLoginSubmit as React.MouseEventHandler<HTMLInputElement>
              }
            />
          </LoginFooter>
        </LoginContainer>
      </LoginScreenBody>
    </LoginScreenContainer>
  );
};

export default LoginScreen;
