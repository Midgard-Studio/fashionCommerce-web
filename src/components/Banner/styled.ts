import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { rgba } from 'polished';
import { colors } from '@/assets/global/tokens';

export const StyledBanner = styled.section`
  display: block;
  width: 100%;
  height: auto;  
`;

export const StyledBannerItem = styled.div`
  position: relative;
  height: 75vh;

  &:before {
    position: absolute;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background-color: ${rgba(colors.black, 0.3)};
    content: '';
  }
`;

export const StyledBannerImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledBannerContent = styled.div``;

export const StyledBannerTitle = styled.h2``;

export const StyledBannerDescription = styled.div``;

export const StyledBannerActions = styled.div``;

export const StyledBannerLink = styled(Link)``;
