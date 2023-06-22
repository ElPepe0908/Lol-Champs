import { Dot, LoaderContainer } from "./styles";

export const Loader = () => {
  return (
    <LoaderContainer>
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </LoaderContainer>
  );
};
