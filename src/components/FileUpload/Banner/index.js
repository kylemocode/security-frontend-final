import React from 'react'
import { BannerContainer, BannerLogo, BannerTitle } from './style';


const Banner = () => {
	return (
		<BannerContainer>
			<BannerLogo src="https://s3-ap-northeast-1.amazonaws.com/www.memepr.com/smartQA/Security+Rabbit+logo+design_dark_logo.png"/>
			<BannerTitle>Security Rabbit</BannerTitle>
		</BannerContainer>
	)
}

export default Banner;
