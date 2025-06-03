import React from 'react';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import { StyledWrapper } from '@/assets/global/styled'
import { StyledHeader } from './styled';

const Header = () => {

  return(
    <StyledHeader>
      <StyledWrapper>
        <Logo />
        <Menu />
      </StyledWrapper>
    </StyledHeader>
  );
}

export default Header;