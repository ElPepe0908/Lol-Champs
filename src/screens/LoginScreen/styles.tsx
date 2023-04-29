import styled from "styled-components";

import { device } from "../../constants";

export const LoginScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginScreenHeader = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.desktops} {
    height: 22vh;
  }
  @media ${device.old_phones} {
    height: 25vh;
  }
`;

export const LogoContainer = styled.div`
  width: 210px;
  display: flex;
  justify-content: center;

  @media ${device.desktops} {
    width: 190px;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

export const LoginScreenBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 390px;
  height: 80vh;

  @media ${device.old_phones} {
    width: 70vw;
  }
  @media ${device.small_phones} {
    width: 80vw;
  }
`;

export const LoginHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.h1`
  font-size: 35px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 5px;

  @media ${device.desktops_large} {
    font-size: 32px;
  }
  @media ${device.desktops} {
    font-size: 30px;
  }
`;

export const HeaderSubText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #656567;
  margin: 0;
`;

export const LoginBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  @media ${device.old_phones} {
    margin-top: 50px;
  }
`;

export const LoginTitle = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;

  @media ${device.desktops_large} {
    font-size: 18px;
  }
`;

export const LoginButton = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 10px;
  background-color: #212121;
  font-size: 13px;
  padding: 0 25px;
  margin-bottom: 30px;
  color: $4B4B4B;

  @media ${device.small_phones} {
    height: 53px;
  }
`;

export const LoginOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ForgotPasswordLink = styled.a`
  color: #fff;
  font-size: 13px;
  cursor: pointer;

  @media ${device.desktops_large} {
    font-size: 12px;
  }
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RememberDiv = styled.div`
  width: 20px;
  height: 20px;
  background-color: #2a2d1a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LoginOption = styled.p`
  color: #fff;
  font-size: 13px;
  margin: 0 0 0 20px;

  @media ${device.desktops_large} {
    font-size: 12px;
    margin: 0 0 0 10px;
  }
`;

export const LoginFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const LoginSubmitButton = styled.input`
  width: 100%;
  height: 45px;
  color: #000;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

export const GoogleLoginButton = styled.input`
  width: 100%;
  height: 45px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #2c2c2c;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;
