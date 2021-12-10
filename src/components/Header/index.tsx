import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from '../Button';
import { HEADER_ITEMS } from './HeaderHelper';

import { HeaderContainer, Nav, MenuButton } from './styles';

const Header: React.FC = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [router.asPath])

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <HeaderContainer>
      <h2>GoSchool</h2>
      <MenuButton size={30} onClick={handleToggleMenu} />
      <Nav open={showMenu}>
        {HEADER_ITEMS.map(item => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/login" passHref>
          <Button color="orange">Fazer Login</Button>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
