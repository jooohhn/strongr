// @flow
import React from 'react';
import styled from 'styled-components';
import { FacebookIcon, GithubIcon, TwitterIcon } from './Icons';
import { NAV_COLOR, BACKGROUND_COLOR } from '../colors';

const StyledFooterDiv = styled.footer`
  width: 100%;
  height: 8vh;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${NAV_COLOR};
  color: ${BACKGROUND_COLOR};
`;

const Footer = () =>
  (<StyledFooterDiv>
    <GithubIcon />
    <FacebookIcon />
    <TwitterIcon />
  </StyledFooterDiv>);

export default Footer;
