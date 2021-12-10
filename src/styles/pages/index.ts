import styled from "styled-components";
import More from "../../components/Home/More";
import Wave from "../../components/Wave";

interface Wave1Props {
  opacity: number;
  top?: number;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5em;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 60em;
  position: relative;
  z-index: 0;
`;

const Wave1 = styled(Wave) <Wave1Props>`
  position: absolute;
  top: ${(props) => props.top ?? 0}px;
  left: 0;
  width: 100%;

  opacity: ${(props) => props.opacity / 100};

  z-index: -1;
`;

const MoreContainer = styled(More)`
  margin-top: -28em;
  z-index: 10;
`;

export { Container, IntroContainer, Wave1, MoreContainer };
