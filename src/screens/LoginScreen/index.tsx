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
  LoaderContainer,
  RememberIcon,
  ForgotPasswordLinkContainer,
  ForgotPasswordToolTip,
  LogInToolTip,
} from "./styles";
import lolLogo from "../../assets/lol-logo.png";

import { useQuery } from "react-query";
import { Loader } from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const { isLoading, isError, error } = useQuery(["userInfo"], () => {
    return;
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [isRememberIconClicked, setIsRememberIconClicked] = useState(false);
  const [isPasswordForgotten, setIsPasswordForgotten] = useState(false);
  const [isFormClicked, setIsFormClicked] = useState(false);

  useEffect(() => {
    const handleClickOutsideForm = (event: MouseEvent) => {
      const target = event.target as Node;
      const isFormClicked = document.querySelector("form")?.contains(target);
      if (!isFormClicked) {
        setIsFormClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideForm);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideForm);
    };
  }, []);

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
              <LoginTitle>
                Email
                <LogInToolTip isFormOnFocus={isFormClicked}>
                  This is a fake log in. <br />
                  Don't put your real password.
                </LogInToolTip>
              </LoginTitle>
              <LoginButton
                onFocus={() => setIsFormClicked(true)}
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              ></LoginButton>
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
                <RememberDiv
                  onClick={() =>
                    setIsRememberIconClicked((prevState) => !prevState)
                  }
                >
                  {isRememberIconClicked ? <RememberIcon /> : null}
                </RememberDiv>
                <LoginOption
                  onClick={() =>
                    setIsRememberIconClicked((prevState) => !prevState)
                  }
                >
                  Remember me
                </LoginOption>
              </RememberContainer>

              <ForgotPasswordLinkContainer>
                <ForgotPasswordLink
                  onMouseOver={() => setIsPasswordForgotten(true)}
                  onMouseOut={() => setIsPasswordForgotten(false)}
                >
                  Forgot password
                </ForgotPasswordLink>
                <ForgotPasswordToolTip
                  isPasswordForgotten={isPasswordForgotten}
                >
                  I don't care
                </ForgotPasswordToolTip>
              </ForgotPasswordLinkContainer>
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
