import React from 'react';
import { StyledWrapper } from '@/assets/global/styled';
import {
  StyledBanner,
  StyledBannerItem,
  StyledBannerImage,
  StyledBannerContent,
  StyledBannerTitle,
  StyledBannerDescription,
  StyledBannerActions,
  StyledBannerLink
} from './styled'
import ImgBanner from '@/assets/images/img-banner.png'

const Banner = () => {

  return(
    <StyledBanner>
      <StyledBannerItem>
        <StyledBannerImage src={ImgBanner} alt="Imagem demonstrativa" priority />
        <StyledWrapper>
          <StyledBannerContent>
            <StyledBannerTitle>Title Banner</StyledBannerTitle>    
            <StyledBannerDescription>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora nesciunt laboriosam cum, eveniet placeat.</p>
            </StyledBannerDescription>
            <StyledBannerActions>
              <StyledBannerLink href="#" title="Banner Link">Banner Link</StyledBannerLink>
            </StyledBannerActions>
          </StyledBannerContent>
        </StyledWrapper>
      </StyledBannerItem>
    </StyledBanner>
  )
}

export default Banner;