import styled, { keyframes } from "styled-components";
type DotAnimationProps = {
  delay: number;
};

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
`;

export const dotPulse = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
`;

export const Dot = styled.div<DotAnimationProps>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: #27272d;
  animation: ${dotPulse} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;
