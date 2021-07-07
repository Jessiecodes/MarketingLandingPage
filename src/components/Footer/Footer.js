import React from 'react';
import { FaFacebook, FaInstagram, FaBehance, FaTwitter, FaLinkedin } from 'react-icons/fa';

import { Button } from '../../globalStyles';
import { 
     FooterContainer,
     FooterSubscription,
     FooterSubheading,
     FooterSubText,
     Form,
     FormInput,
     FooterLinksContainer,
     FooterLinksWrapper,
     FooterLinkItems,
     FooterLinkTitle,
     FooterLink,
     SocialMedia,
     SocialMediaWrap,
     SocialLogo,
     SocialIcons,
     SocialIcon,
     SocialIconLink,
     WebsiteRights } from './Footer.elements';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubheading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubheading>
                <FooterSubText>
                    You can unsubscribe at anytime.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your email" />
                        <Button fontBig> Subscribe </Button>
                </Form>
            </FooterSubscription>
        
            <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'> How it works </FooterLink>
                    <FooterLink to='/'> Testimonials</FooterLink>
                    <FooterLink to='/'> Careers </FooterLink>
                    <FooterLink to='/'> Terms of Service </FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle> Contact Us </FooterLinkTitle>
                    <FooterLink to='/sign-up'> How it works </FooterLink>
                    <FooterLink to='/'> Testimonials</FooterLink>
                    <FooterLink to='/'> Careers </FooterLink>
                    <FooterLink to='/'> Terms of Service </FooterLink>
                </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to='/sign-up'> Facebook </FooterLink>
                    <FooterLink to='/'> Instagram  </FooterLink>
                    <FooterLink to='/'> Behance </FooterLink>
                    <FooterLink to='/'> Github </FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'> How it works </FooterLink>
                    <FooterLink to=''> Testimonials</FooterLink>
                    <FooterLink to='/'> Careers </FooterLink>
                    <FooterLink to='/'> Terms of Service </FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>Ultra &copy; copyright 2021 </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/Jessie75908713' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/jessica-leverett-63b16714a/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/jcodendesign/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.behance.net/jessiedesign1' target="_blank" aria-label="Youtube">
                            <FaBehance />
                        </SocialIconLink>
                        
                    </SocialIcons>
                
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>

    );
};

export default Footer;
