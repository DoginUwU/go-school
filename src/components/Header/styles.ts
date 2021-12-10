import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

interface NavProps {
  open?: boolean;
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;

  background-color: ${props => props.theme.palette.common.main};
  color: ${props => props.theme.palette.text.primary};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  z-index: 999;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    position: fixed;
    justify-content: space-between;
    padding: 0 2em;
  }
`;

const MenuButton = styled(FiMenu)`
  z-index: 999;
  display: none;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
  }
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
  transition: all 0.2s ease-in-out;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(200px)')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    z-index: 998;
    background-color: ${props => props.theme.palette.common.main};
    color: ${props => props.theme.palette.text.primary};

    padding: 8em 2em;
  }
`;

export { HeaderContainer, Nav, MenuButton };
