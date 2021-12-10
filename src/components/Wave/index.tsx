import { HTMLAttributes } from "react";
import { Container } from "./styles";

const Wave: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => {
  return (
    <Container {...rest} />
  );
};

export default Wave;
