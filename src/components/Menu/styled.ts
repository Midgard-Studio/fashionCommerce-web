import styled from 'styled-components';
import { fonts, colors } from '@/assets/global/tokens';
import Link from 'next/link';

export const StyledMenu = styled.nav`
  display: block;
  width: 100%;
  font-family: ${fonts.primary};
  background-color: ${colors.pink400};
`;

export const StyledMenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledMenuItem = styled.li`
  margin: 0;
`;

export const StyledMenuAnchor = styled(Link)`
  display: inline-block;
  padding: 8px;
  color: ${colors.black};
  text-decoration: none;
`;
