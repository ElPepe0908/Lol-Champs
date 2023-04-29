import React from "react";
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
} from "./styles";
import lolLogo from "../../assets/lol-logo.png";

import CheckIcon from "@mui/icons-material/Check";
import GoogleIcon from "@mui/icons-material/Google";
export const LoginScreen = () => {
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
              <LoginButton type="text" placeholder="Username" />
              <LoginTitle>Password</LoginTitle>
              <LoginButton type="password" placeholder="Password" />
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
            <LoginSubmitButton type="submit" value="Log in" />
            <GoogleLoginButton type="submit" value=" Log in with Google" />
          </LoginFooter>
        </LoginContainer>
      </LoginScreenBody>
    </LoginScreenContainer>
  );
};
